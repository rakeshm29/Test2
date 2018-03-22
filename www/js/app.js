// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter=angular.module('starter', ['ionic'])

starter.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

starter.controller("IndexCtrl",function(){
	var MyData=[{ ID: '123', Name: 'Shiva', Gen: 'Male', DOB: '00-00-00', Email: 'shiva@gmail.com' },
               { ID: '674', Name: 'Kumar', Gen: 'Male', DOB: '00-00-00', Email: 'kumar@gmail.com' },
               { ID: '948', Name: 'Sanju', Gen: 'Male', DOB: '00-00-00', Email: 'sanju@gmail.com' },
               { ID: '564', Name: 'Surya', Gen: 'Male', DOB: '00-00-00', Email: 'surya@gmail.com' },
               { ID: '095', Name: 'Raheem', Gen: 'Male', DOB: '00-00-00', Email: 'raheem@gmail.com' },
               { ID: '432', Name: 'Punith', Gen: 'Male', DOB: '00-00-00', Email: 'punith@gmail.com' }
			   ]
	
	$("#TblGrid").jqGrid({
		 colModel: [
                { label: 'EmployeeID', name: 'ID' },
                { label: 'Name', name: 'Name'},
                { label: 'Gender', name: 'Gen'},
                { label: 'DOB', name: 'DOB' },
                { label: 'EmailID', name: 'Email' }
            ],
			width:"100%",
			height:"100%",
			pager:"#DivPager",
			data:MyData,
			datatype: 'local',
			caption: 'Employee Deatail',
			rowNum: 5,
            rowList: [5, 30, 80],
			viewrecords: true,
            rownumbers: true
	})
})
