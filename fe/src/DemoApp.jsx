import React, {useEffect,useState} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin,{Draggable} from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootstrap from "react-bootstrap";
import $ from 'jquery'
import Collapsible from 'react-collapsible';
import listPlugin from '@fullcalendar/list';
// import Draggable from 'react-draggable';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Button, Alert, Modal, ModalHeader, ModalBody
} from "reactstrap";
import 'jquery-ui-dist/jquery-ui';
import Unscheduled from './Unscheduled.jsx';
import Navbar from './Navbar.jsx'
import Axios from 'axios'



// import { DarkmodeSwitch } from 'reacthalfmoon';
 
// function App() {
//   const [darkmode, setDarkmode] = useState(false);
//   return (
//       <DarkmodeSwitch checked={darkmode} toggle={()=>{setDarkmode(!darkmode)}} />
//   )
// }
 
// export default Apps


export default class DemoApp extends React.Component 
{

  
  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  

  jQuerycode=()=>{
    $("#append_button").click(function() {
      $(".input_group_wrapper").append(`
      <div class="input_group">
      <div class="row">
      <input class="form-control col d-flex ml-2 text" id="input_text">
        </input>
      
       <button class="close col-sm-1 remove_button">
       <svg width="2em" height="1.3em" viewBox="0 0 16 16" class="bi bi-file-x-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146a.5.5 0 1 0-.708.708L7.293 8 6.146 9.146a.5.5 0 1 0 .708.708L8 8.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 8l1.147-1.146a.5.5 0 0 0-.708-.708L8 7.293 6.854 6.146z"/>
        </svg>
        </button>
        </div>
        <div class="text-center vl"></div>
        </div>`);
  });

  $(".input_group_wrapper").on("click",".remove_button",function(e){
    e.preventDefault()
    $(this).closest(".input_group").remove();
 });

// $('#external-events .fc-event').each(function() {
//   var externalEvents = {
//     title: $.trim($(this).text()) 
    
//   }; // creating event object and makes event text as its title
//   $(this).data('externalEvents', externalEvents); //saving events into DOM
//   // make the event draggable using jQuery UI
//   $(this).draggable({
//     zIndex: 999,
//     revert: true, // will cause the event to go back to its
//     revertDuration: 0 //  original position after the drag
    
//    });
//  });
// $('.demo-app-main').fullCalendar({
//   header: {
//     left: 'prev,next today',
//     center: 'title',
//     right: 'month,agendaWeek,agendaDay'
//   },
//   editable: true,
//   droppable: true, // this allows things to be dropped onto the calendar
//   dragRevertDuration: 0,
//   theme: true,
// $('#calendar')({
//   drop: function(date, jsEvent) {
//     // is the "remove after drop" checkbox checked?
//     if (date > new Date()) {
//       var externalEvents = $(this).data('externalEvents');
//       alert(externalEvents.title);
//       $(this).data('event', {
//         title: externalEvents.title,
//         start: moment(date).format('HH:mm:ss'),
//         allDay: false,
//         stick: true
//       });
//       if ($('#drop-remove').is(':checked')) {
//         // if so, remove the element from the "Draggable Events" list
//         $(this).remove();
//       }
//     } else {
//       alert("can't add event");
//     }
//   },
// });
 }
  componentDidMount() {
    this.jQuerycode();

  };
    
  render() {

         

    return (
      <div>

        <div>
          <Navbar/>
        </div>
      {/* {this.renderNavbar()} */}
      <div className='demo-app'>
        
        {this.renderSidebar()}
        
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin]}
            headerToolbar={{
              left: 'prev,next today', 
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            initialView='timeGridWeek'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            droppable={true}
            
            weekends={this.state.weekendsVisible}
            initialEvents={INITIAL_EVENTS}  
            select={this.handleDateSelect}
            eventContent={renderEventContent}  //custom render function
            eventClick={this.handleEventClick}
            eventAdd={this.handleEventAdd}
            eventChange={this.handleEventChange} // called for drag-n-drop/resize
            eventRemove={this.handleEventRemove}
            drop={this.onDrop}
            eventsSet={this.handleEvents}  //called after events are initialized/added/changed/removed
            id="calendar"
            eventReceive={(info) => {
              console.log("inside receive");
              this.props.drop(info);
          }}
          

            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
            
          />
          </div>
        </div>
        {/*new event modal popup */}
         
      </div>
    )
  }

  renderSidebar() {
   // new Draggable(document.getElementById("external-events"), {
    //   itemSelector: '.external-event',
    //  });
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section1'>
          {/* <h2>Instructions</h2> */}
          <ul>
            {/* <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li> */}
          </ul>
          
        </div>
        <div className='demo-app-sidebar-section2'>
          <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            Show weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section3'>
          {/* <h2>All Events ({this.state.currentEvents.length})</h2> */}
          {/* <Collapsible trigger="All Events " id="collapsible"> */}
            
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
          {/* </Collapsible> */}
        </div>
       <div className='demo-app-sidebar-section4'>
          <h2>Unscheduled events</h2>


          {/* <div class="Container">
            <div class="input_group_wrapper">
              <div class="input_group">
                <div class="row">
                 
                     <input class="form-control col d-flex ml-2 text" id="input_text"></input>
                     <button class="close col-sm-1 remove_button">
                     <svg width="2em" height="1.3em" viewBox="0 0 16 16" class="bi bi-file-x-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146a.5.5 0 1 0-.708.708L7.293 8 6.146 9.146a.5.5 0 1 0 .708.708L8 8.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 8l1.147-1.146a.5.5 0 0 0-.708-.708L8 7.293 6.854 6.146z"/>
                     </svg>
                     </button>
                 </div>
            <div class="text-center vl"></div>
            </div>
            </div>
            <div class="text-center">
            <button class="btn mt-3" id="append_button" >
            <svg width="2em" height="2em" viewBox="0 0 16 20" class="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg>
            </button>
            </div>  
             </div>  */}
           
           {/* <div id="external-events" className="mt-3" >
            <p className="text-muted">Drag and drop your event or click in the calendar</p>
            <div className='fc-event'>My Event 2</div>
            </div>
                                          
           </div>
          </div> */}
          

       {/* //  <div id='wrap'>
      // //        <div id='external-events'>
      // //        <div id='external-events-listing'>
               
      // //             <div class='fc-event'>event1</div>
      // //             <div class='fc-event'>My Event 2</div>
      // //             <div class='fc-event'>My Event 3</div>
      // //             <div class='fc-event'>My Event 4</div>
      // //             <div class='fc-event'>My Event 5</div>
      // //          </div>
      // //        <p>
      // //       <input type='checkbox' id='drop-remove' checked='checked' />
      // //        <label for='drop-remove'>remove after drop</label>
      // //         </p>


      // //   </div>
      // //  </div>   

      // //  </div>
      // //     </div>
      //  */}
      <div>
         <Unscheduled/>
         </div>
     </div>
     </div>
  )
    
    
  }

 handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  
  
 
  handleDateSelect = (selectInfo) => {
    // const [modal, setModal] = useState(false);
    let title = prompt('enter new title')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect();   
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    // newEventModal();
    // setSelectedDay(selectInfo);
    // toggle();

    
    
      
        // {/* <Modal isOpen={modal} toggle={() => toggle()} className="">
        //   <ModalHeader toggle={() => toggle()} tag="h4">
        //      Add Event
        //   </ModalHeader>
        //       <ModalBody>
                
        //             <Row form>
                      
        //               <Col className="col-12">
        //                   <AvField type="select" name="category" label="Select Category" value={event ? event.category : 'bg-primary'}>
        //                     <option value="bg-danger">Danger</option>
        //                     <option value="bg-success">Success</option>
        //                     <option value="bg-primary">Primary</option>
        //                     <option value="bg-info">Info</option>
        //                     <option value="bg-dark">Dark</option>
        //                     <option value="bg-warning">Warning</option>
        //                  </AvField>
        //               </Col>
        //             </Row>
        //             <Row>
        //               <Col>
        //                 <div className="text-right">
        //                  <button type="button" className="btn btn-light mr-2" onClick={() => toggle()}>Close</button>
        //                  <button type="submit" className="btn btn-success save-event">Save</button>
        //                </div>
        //               </Col>
        //             </Row>
                 
        //       </ModalBody>
        // </Modal> */}

// const {
//       buttonLabel,
//       className
//     } = props;
  
    // const [modal, setModal] = React.useState(false);
    // const [unmountOnClose, setUnmountOnClose] = React.useState(true);
  
    // const toggle = () => setModal(!modal);
    // const changeUnmountOnClose = e => {
    //     let value = e.target.value;
    //     setUnmountOnClose(JSON.parse(value));
    // }
  
    // return (
    //     <div>
            
    //         <Modal isOpen={modal} toggle={toggle} className={className} unmountOnClose={unmountOnClose}>
    //             <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    //             <ModalBody>
    //                 <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
    //             </ModalBody>
    //             <ModalFooter>
    //                 <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
    //                 <Button color="secondary" onClick={toggle}>Cancel</Button>
    //             </ModalFooter>
    //         </Modal>
    //     </div>
    

        
    // )
    
  }
  

  handleEventClick = (clickInfo) => {
     
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

 onDrop = (event) => {

   
    const draggedEl = event.draggedEl;
    console.log("inside drop");
  
    var newEvent = {
        id: calendarEvents.length + 1,
        title: draggedEl.innerText,
        start: event.date,
        className: draggedEl.getAttribute('data-type') + ' text-white'
    };
  
    // save new event
    setCalendarEvents(calendarEvents.concat(newEvent));
  }

  // handledrag=()=>{
  //   useEffect(() => {
  //     new Draggable(document.getElementById("external-events"), {
  //         itemSelector: '.external-event',
  //     });
  //    });
  // }

 }





  

// function newEventModal(){
//   console.log("inside");
//   const [modal, setModal] = useState(false);
  
//     setModal(!modal)


//   return(
//      <Modal isOpen={modal} toggle={() => toggle()} className="">
//           <ModalHeader toggle={() => toggle()} tag="h4">
//              Add Event
//           </ModalHeader>
//               <ModalBody>
                
//                     <Row form>
                      
//                       <Col className="col-12">
//                           <AvField type="select" name="category" label="Select Category" value={event ? event.category : 'bg-primary'}>
//                             <option value="bg-danger">Danger</option>
//                             <option value="bg-success">Success</option>
//                             <option value="bg-primary">Primary</option>
//                             <option value="bg-info">Info</option>
//                             <option value="bg-dark">Dark</option>
//                             <option value="bg-warning">Warning</option>
//                          </AvField>
//                       </Col>
//                     </Row>
//                     <Row>
//                       <Col>
//                         <div className="text-right">
//                          <button type="button" className="btn btn-light mr-2" onClick={() => toggle()}>Close</button>
//                          <button type="submit" className="btn btn-success save-event">Save</button>
//                        </div>
//                       </Col>
//                     </Row>
                 
//               </ModalBody>
//         </Modal> 

//   )
 }


function renderEventContent(eventInfo) {

  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}



function renderSidebarEvent(event) {
  
  return (
    
    <ul key={event.id}>
      <ReactBootstrap.Card body>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
      </ReactBootstrap.Card>
    </ul>
  )
}











  