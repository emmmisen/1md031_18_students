



'use strict';
var socket = io();

var vm = new Vue({
  el: '#menu',
  data: {
	burgers: food,
    orderplaced: false,
      checked: [],
      orders: {},
      deliveryLocation: {x: 0, y: 0},
  orderobject: { 
      Fullname: "" ,
      Email: "" ,
      Paymentmethod: "" ,
      Gender: "", 
      
  }
 },
   // created: function () {
    // socket.on('initialize', function (data) {
    //   this.orders = data.orders;
     //}.bind(this));

   //  socket.on('currentQueue', function (data) {
    //   this.orders = data.orders;
    // }.bind(this));
//   },
    methods: {
        markDone: function() {
            
            //console.log("Button clicked")
            
            //var listorderinfo = [{
              //  "E-mail": '' + this.orderobject.Email,
             //   "Name": '' + this.orderobject.Fullname,
              // "Street": '' + this.orderobject.Street,
               // Boolean: true,
            //}]
            //return listorderinfo;
        },
        ordered (){
    this.orderplaced = true;
            
        },
      //  ,getNext: function () {
    //   var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
    //     return Math.max(last, next);
    //   }, 0);
    //   return lastOrder + 1;
   
    addOrder: function (event) {
        socket.emit("addOrder", {orderId: this.orderobject.Fullname,
                                  details: this.deliveryLocation,
                                  orderItems: this.checked,
                                  orderPersonalInfo: this.orderobject
                                 });
 
     // var offset = {x: event.currentTarget.getBoundingClientRect().left,
        
     //               y: event.currentTarget.getBoundingClientRect().top};
    //  socket.emit("addOrder", { orderId: this.getNext(),
      //                          details: { x: event.clientX - 10 - offset.x,
        //                                   y: event.clientY - 10 - offset.y },
          //                      orderItems: ["Beans", "Curry"]
            //                  });
    },
        displayOrder: function (event) {
            
            var display = {
                   x: event.currentTarget.getBoundingClientRect().left,
                   y: event.currentTarget.getBoundingClientRect().top

                };
                this.deliveryLocation = { x: event.clientX - 10 - display.x,
                                         y: event.clientY - 10 - display.y}
            
           }
        
                 }
})



