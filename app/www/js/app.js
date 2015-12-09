angular.module("starter",["ionic"]).run(["$ionicPlatform",function(t){t.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.close(),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&window.StatusBar.styleDefault()})}]).config(["$stateProvider","$urlRouterProvider",function(t,l){t.state("app",{url:"/app","abstract":!0,templateUrl:"templates/menu.html",controller:"AppCtrl"}).state("app.search",{url:"/search",views:{menuContent:{templateUrl:"templates/search.html"}}}).state("app.browse",{url:"/browse",views:{menuContent:{templateUrl:"templates/browse.html"}}}).state("app.playlists",{url:"/playlists",views:{menuContent:{templateUrl:"templates/playlists.html",controller:"PlaylistsCtrl"}}}).state("app.single",{url:"/playlists/:playlistId",views:{menuContent:{templateUrl:"templates/playlist.html",controller:"PlaylistCtrl"}}}),l.otherwise("/app/playlists")}]);
angular.module("starter").controller("AppCtrl",["$scope","$ionicModal","$timeout",function(l,o,t){l.loginData={},o.fromTemplateUrl("templates/login.html",{scope:l}).then(function(o){l.modal=o}),l.closeLogin=function(){l.modal.hide()},l.login=function(){l.modal.show()},l.doLogin=function(){console.log("Doing login",l.loginData),t(function(){l.closeLogin()},1e3)}}]).controller("PlaylistsCtrl",["$scope",function(l){l.playlists=[{title:"Reggae",id:1},{title:"Chill",id:2},{title:"Dubstep",id:3},{title:"Indie",id:4},{title:"Rap",id:5},{title:"Cowbell",id:6}]}]).controller("PlaylistCtrl",function(){});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJydW4iLCIkaW9uaWNQbGF0Zm9ybSIsInJlYWR5Iiwid2luZG93IiwiY29yZG92YSIsInBsdWdpbnMiLCJLZXlib2FyZCIsImNsb3NlIiwiZGlzYWJsZVNjcm9sbCIsIlN0YXR1c0JhciIsInN0eWxlRGVmYXVsdCIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwic3RhdGUiLCJ1cmwiLCJhYnN0cmFjdCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsInZpZXdzIiwibWVudUNvbnRlbnQiLCJvdGhlcndpc2UiLCIkc2NvcGUiLCIkaW9uaWNNb2RhbCIsIiR0aW1lb3V0IiwibG9naW5EYXRhIiwiZnJvbVRlbXBsYXRlVXJsIiwic2NvcGUiLCJ0aGVuIiwibW9kYWwiLCJjbG9zZUxvZ2luIiwiaGlkZSIsImxvZ2luIiwic2hvdyIsImRvTG9naW4iLCJjb25zb2xlIiwibG9nIiwicGxheWxpc3RzIiwidGl0bGUiLCJpZCJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQVFDLE9BQU8sV0FBWSxVQUUxQkMsS0FBSyxpQkFBa0IsU0FBVUMsR0FDOUJBLEVBQWVDLE1BQU0sV0FDYkMsT0FBT0MsU0FBV0QsT0FBT0MsUUFBUUMsUUFBUUMsV0FDekNGLFFBQVFDLFFBQVFDLFNBQVNDLFFBQ3pCSCxRQUFRQyxRQUFRQyxTQUFTRSxlQUFjLElBRXZDTCxPQUFPTSxXQUNQTixPQUFPTSxVQUFVQyxvQkFLNUJDLFFBQVEsaUJBQWtCLHFCQUFzQixTQUFVQyxFQUFnQkMsR0FDdkVELEVBRUNFLE1BQU0sT0FDSEMsSUFBSyxPQUNMQyxZQUFVLEVBQ1ZDLFlBQWEsc0JBQ2JDLFdBQVksWUFHZkosTUFBTSxjQUNIQyxJQUFLLFVBQ0xJLE9BQ0lDLGFBQ0lILFlBQWEsNEJBS3hCSCxNQUFNLGNBQ0hDLElBQUssVUFDTEksT0FDSUMsYUFDSUgsWUFBYSw0QkFJdEJILE1BQU0saUJBQ0hDLElBQUssYUFDTEksT0FDSUMsYUFDSUgsWUFBYSwyQkFDYkMsV0FBWSxvQkFLekJKLE1BQU0sY0FDSEMsSUFBSyx5QkFDTEksT0FDSUMsYUFDSUgsWUFBYSwwQkFDYkMsV0FBWSxtQkFLeEJMLEVBQW1CUSxVQUFVO0FDN0RqQ3ZCLFFBQVFDLE9BQU8sV0FFZG1CLFdBQVcsV0FBWSxTQUFVLGNBQWUsV0FBWSxTQUFVSSxFQUFRQyxFQUFhQyxHQVV4RkYsRUFBT0csYUFJUEYsRUFBWUcsZ0JBQWdCLHdCQUN4QkMsTUFBT0wsSUFDUk0sS0FBSyxTQUFVQyxHQUNkUCxFQUFPTyxNQUFRQSxJQUluQlAsRUFBT1EsV0FBYSxXQUNoQlIsRUFBT08sTUFBTUUsUUFJakJULEVBQU9VLE1BQVEsV0FDWFYsRUFBT08sTUFBTUksUUFJakJYLEVBQU9ZLFFBQVUsV0FDYkMsUUFBUUMsSUFBSSxjQUFlZCxFQUFPRyxXQUlsQ0QsRUFBUyxXQUNMRixFQUFPUSxjQUNSLFNBSVZaLFdBQVcsaUJBQWtCLFNBQVUsU0FBVUksR0FDOUNBLEVBQU9lLFlBQ0hDLE1BQU8sU0FBVUMsR0FBSSxJQUNyQkQsTUFBTyxRQUFTQyxHQUFJLElBQ3BCRCxNQUFPLFVBQVdDLEdBQUksSUFDdEJELE1BQU8sUUFBU0MsR0FBSSxJQUNwQkQsTUFBTyxNQUFPQyxHQUFJLElBQ2xCRCxNQUFPLFVBQVdDLEdBQUksT0FJN0JyQixXQUFXLGVBQWdCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdzdGFydGVyJywgWydpb25pYyddKVxyXG5cclxuLnJ1bihbJyRpb25pY1BsYXRmb3JtJywgZnVuY3Rpb24gKCRpb25pY1BsYXRmb3JtKSB7XHJcbiAgICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQpIHtcclxuICAgICAgICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xyXG4gICAgICAgICAgICB3aW5kb3cuU3RhdHVzQmFyLnN0eWxlRGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XSlcclxuXHJcbi5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuXHJcbiAgICAuc3RhdGUoJ2FwcCcsIHtcclxuICAgICAgICB1cmw6ICcvYXBwJyxcclxuICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9tZW51Lmh0bWwnLFxyXG4gICAgICAgIGNvbnRyb2xsZXI6ICdBcHBDdHJsJ1xyXG4gICAgfSlcclxuXHJcbiAgICAuc3RhdGUoJ2FwcC5zZWFyY2gnLCB7XHJcbiAgICAgICAgdXJsOiAnL3NlYXJjaCcsXHJcbiAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgJ21lbnVDb250ZW50Jzoge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc2VhcmNoLmh0bWwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC5zdGF0ZSgnYXBwLmJyb3dzZScsIHtcclxuICAgICAgICB1cmw6ICcvYnJvd3NlJyxcclxuICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAnbWVudUNvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9icm93c2UuaHRtbCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC5zdGF0ZSgnYXBwLnBsYXlsaXN0cycsIHtcclxuICAgICAgICAgIHVybDogJy9wbGF5bGlzdHMnLFxyXG4gICAgICAgICAgdmlld3M6IHtcclxuICAgICAgICAgICAgICAnbWVudUNvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3BsYXlsaXN0cy5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1BsYXlsaXN0c0N0cmwnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgIC5zdGF0ZSgnYXBwLnNpbmdsZScsIHtcclxuICAgICAgICB1cmw6ICcvcGxheWxpc3RzLzpwbGF5bGlzdElkJyxcclxuICAgICAgICB2aWV3czoge1xyXG4gICAgICAgICAgICAnbWVudUNvbnRlbnQnOiB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9wbGF5bGlzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQbGF5bGlzdEN0cmwnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHN0YXRlcyBhcmUgbWF0Y2hlZCwgdXNlIHRoaXMgYXMgdGhlIGZhbGxiYWNrXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvYXBwL3BsYXlsaXN0cycpO1xyXG59XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdzdGFydGVyJylcblxuLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBbJyRzY29wZScsICckaW9uaWNNb2RhbCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkc2NvcGUsICRpb25pY01vZGFsLCAkdGltZW91dCkge1xuXG4gICAgLy8gV2l0aCB0aGUgbmV3IHZpZXcgY2FjaGluZyBpbiBJb25pYywgQ29udHJvbGxlcnMgYXJlIG9ubHkgY2FsbGVkXG4gICAgLy8gd2hlbiB0aGV5IGFyZSByZWNyZWF0ZWQgb3Igb24gYXBwIHN0YXJ0LCBpbnN0ZWFkIG9mIGV2ZXJ5IHBhZ2UgY2hhbmdlLlxuICAgIC8vIFRvIGxpc3RlbiBmb3Igd2hlbiB0aGlzIHBhZ2UgaXMgYWN0aXZlIChmb3IgZXhhbXBsZSwgdG8gcmVmcmVzaCBkYXRhKSxcbiAgICAvLyBsaXN0ZW4gZm9yIHRoZSAkaW9uaWNWaWV3LmVudGVyIGV2ZW50OlxuICAgIC8vJHNjb3BlLiRvbignJGlvbmljVmlldy5lbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAvL30pO1xuXG4gICAgLy8gRm9ybSBkYXRhIGZvciB0aGUgbG9naW4gbW9kYWxcbiAgICAkc2NvcGUubG9naW5EYXRhID0ge307XG5cblxuICAgIC8vIENyZWF0ZSB0aGUgbG9naW4gbW9kYWwgdGhhdCB3ZSB3aWxsIHVzZSBsYXRlclxuICAgICRpb25pY01vZGFsLmZyb21UZW1wbGF0ZVVybCgndGVtcGxhdGVzL2xvZ2luLmh0bWwnLCB7XHJcbiAgICAgICAgc2NvcGU6ICRzY29wZVxyXG4gICAgfSkudGhlbihmdW5jdGlvbiAobW9kYWwpIHtcclxuICAgICAgICAkc2NvcGUubW9kYWwgPSBtb2RhbDtcclxuICAgIH0pO1xuXG4gICAgLy8gVHJpZ2dlcmVkIGluIHRoZSBsb2dpbiBtb2RhbCB0byBjbG9zZSBpdFxuICAgICRzY29wZS5jbG9zZUxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5tb2RhbC5oaWRlKCk7XHJcbiAgICB9O1xuXG4gICAgLy8gT3BlbiB0aGUgbG9naW4gbW9kYWxcbiAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLm1vZGFsLnNob3coKTtcclxuICAgIH07XG5cbiAgICAvLyBQZXJmb3JtIHRoZSBsb2dpbiBhY3Rpb24gd2hlbiB0aGUgdXNlciBzdWJtaXRzIHRoZSBsb2dpbiBmb3JtXG4gICAgJHNjb3BlLmRvTG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RvaW5nIGxvZ2luJywgJHNjb3BlLmxvZ2luRGF0YSk7XG5cbiAgICAgICAgLy8gU2ltdWxhdGUgYSBsb2dpbiBkZWxheS4gUmVtb3ZlIHRoaXMgYW5kIHJlcGxhY2Ugd2l0aCB5b3VyIGxvZ2luXG4gICAgICAgIC8vIGNvZGUgaWYgdXNpbmcgYSBsb2dpbiBzeXN0ZW1cbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY2xvc2VMb2dpbigpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfTtcclxufV0pXG5cbi5jb250cm9sbGVyKCdQbGF5bGlzdHNDdHJsJywgWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgICAkc2NvcGUucGxheWxpc3RzID0gW1xuICAgICAgeyB0aXRsZTogJ1JlZ2dhZScsIGlkOiAxIH0sXG4gICAgICB7IHRpdGxlOiAnQ2hpbGwnLCBpZDogMiB9LFxuICAgICAgeyB0aXRsZTogJ0R1YnN0ZXAnLCBpZDogMyB9LFxuICAgICAgeyB0aXRsZTogJ0luZGllJywgaWQ6IDQgfSxcbiAgICAgIHsgdGl0bGU6ICdSYXAnLCBpZDogNSB9LFxuICAgICAgeyB0aXRsZTogJ0Nvd2JlbGwnLCBpZDogNiB9XG4gICAgXTtcclxufV0pXG5cbi5jb250cm9sbGVyKCdQbGF5bGlzdEN0cmwnLCBmdW5jdGlvbiAoKSB7XHJcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
