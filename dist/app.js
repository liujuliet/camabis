!function(){"use strict";angular.module("app",["firebase","myApp.config","ngAnimate","ngRoute","vAccordion"])}(),function(){"use strict";function e(e,o,t){function n(t){e.get(o+"/concerns").success(function(e){console.log("yessss"),t(JSON.stringify(e))}).error(function(e){console.log("Didn't get concerns properly"+e)})}var a={getConcerns:n};return a}angular.module("app").factory("DatabaseFactory",e),e.$inject=["$http","databaseUrl","$rootScope"]}(),angular.module("myApp.config",[]).constant("databaseUrl","https://camabis.herokuapp.com/api"),function(){"use strict";function e(e,o,t,n){function a(){console.log("Home activated"),i(),o.getConcerns(function(e){t.concernContainer=e,console.log(e)})}function i(){e.get("jmap.json").success(function(e){t.jmap=e}).error(function(e){console.log("Didn't get jmap properly")})}function c(o){var t={method:"POST",url:"https://api.imgur.com/3/image",headers:{Authorization:"Client-ID a83b8d484886938","Content-type":"application/x-www-form-urlencoded"},data:o};e(t).then(function(e){console.log(e.data.data.link)},function(e){console.log(e)})}function r(e){l.classList.remove("active"),m.classList.remove("active"),p.classList.remove("active"),e.classList.add("active")}var s=document.querySelector("[name='upload-photo']"),l=document.querySelector("[role='goNew']"),m=document.querySelector("[role='goResolved']"),p=document.querySelector("[role='goNonissue']");n.mobile=document.documentElement.classList.contains("mobile"),t.showNav=!n.mobile,t.status="new",s.addEventListener("change",function(e){e.preventDefault();for(var o=e.target.files,t=0;t<o.length;t++){var n=o[t];if(!n.type.match(/image.*/))return alert("Only images are accepted.");c(n)}}),l.addEventListener("click",function(e){l.classList.contains("active")||r(l)}),m.addEventListener("click",function(e){m.classList.contains("active")||r(m)}),p.addEventListener("click",function(e){p.classList.contains("active")||r(p)}),r(l),a(),t.toggleNav=function(){t.showNav=!t.showNav}}angular.module("app").controller("HomeController",e),e.$inject=["$http","DatabaseFactory","$scope","$rootScope"]}(),function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&document.documentElement.classList.add("mobile")}(navigator.userAgent||navigator.vendor||window.opera),angular.module("app").config(["$routeProvider",function(e){e.when("/",{templateUrl:"home.html",controller:"HomeController"}).otherwise({redirectTo:"/"})}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsIkRhdGFiYXNlL0RhdGFiYXNlLmZhY3RvcnkuanMiLCJDb25maWcvY29uZmlnLmpzIiwiSG9tZS9Ib21lLmNvbnRyb2xsZXIuanMiLCJsaWIvZGV0ZWN0bW9iaWxlYnJvd3Nlci5qcyIsIlJvdXRlcy9yb3V0ZXMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsIkRhdGFiYXNlRmFjdG9yeSIsIiRodHRwIiwiZGF0YWJhc2VVcmwiLCIkcm9vdFNjb3BlIiwiZ2V0Q29uY2VybnMiLCJjYWxsYmFjayIsImdldCIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInNlcnZpY2UiLCJmYWN0b3J5IiwiJGluamVjdCIsImNvbnN0YW50IiwiSG9tZUNvbnRyb2xsZXIiLCIkc2NvcGUiLCJhY3RpdmF0ZSIsImdldEptYXAiLCJjb25jZXJucyIsImNvbmNlcm5Db250YWluZXIiLCJqbWFwIiwidXBsb2FkUGhvdG8iLCJmaWxlIiwicmVxIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJDb250ZW50LXR5cGUiLCJ0aGVuIiwicmVzIiwibGluayIsIm1ha2VBY3RpdmUiLCJlbCIsImdvTmV3RWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnb1Jlc29sdmVkRWwiLCJnb05vbmlzc3VlRWwiLCJhZGQiLCJ1cGxvYWRQaG90b0VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibW9iaWxlIiwiZG9jdW1lbnRFbGVtZW50IiwiY29udGFpbnMiLCJzaG93TmF2Iiwic3RhdHVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGVzIiwidGFyZ2V0IiwiaSIsImxlbmd0aCIsInR5cGUiLCJtYXRjaCIsImFsZXJ0IiwidG9nZ2xlTmF2IiwiY29udHJvbGxlciIsImEiLCJ0ZXN0Iiwic3Vic3RyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwid2luZG93Iiwib3BlcmEiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsIm90aGVyd2lzZSIsInJlZGlyZWN0VG8iXSwibWFwcGluZ3MiOiJDQUFBLFdBQ0EsWUFFQUEsU0FBQUMsT0FBQSxPQUNBLFdBQ0EsZUFDQSxZQUNBLFVBQ0Esa0JDUkEsV0FDQSxZQVNBLFNBQUFDLEdBQUFDLEVBQUFDLEVBQUFDLEdBU0EsUUFBQUMsR0FBQUMsR0FDQUosRUFBQUssSUFBQUosRUFBQSxhQUNBSyxRQUFBLFNBQUFDLEdBQ0FDLFFBQUFDLElBQUEsVUFDQUwsRUFBQU0sS0FBQUMsVUFBQUosTUFFQUssTUFBQSxTQUFBQSxHQUNBSixRQUFBQyxJQUFBLCtCQUFBRyxLQWZBLEdBQUFDLElBQ0FWLFlBQUFBLEVBR0EsT0FBQVUsR0FaQWhCLFFBQ0FDLE9BQUEsT0FDQWdCLFFBQUEsa0JBQUFmLEdBRUFBLEVBQUFnQixTQUFBLFFBQUEsY0FBQSxpQkNQQWxCLFFBQUFDLE9BQUEsbUJBQ0FrQixTQUFBLGNBQUEscUNDREEsV0FDQSxZQVFBLFNBQUFDLEdBQUFqQixFQUFBRCxFQUFBbUIsRUFBQWhCLEdBa0RBLFFBQUFpQixLQUNBWCxRQUFBQyxJQUFBLGtCQUNBVyxJQUNBckIsRUFBQUksWUFBQSxTQUFBa0IsR0FDQUgsRUFBQUksaUJBQUFELEVBQ0FiLFFBQUFDLElBQUFZLEtBSUEsUUFBQUQsS0FDQXBCLEVBQUFLLElBQUEsYUFBQUMsUUFBQSxTQUFBQyxHQUNBVyxFQUFBSyxLQUFBaEIsSUFDQUssTUFBQSxTQUFBQSxHQUNBSixRQUFBQyxJQUFBLDhCQUlBLFFBQUFlLEdBQUFDLEdBQ0EsR0FBQUMsSUFDQUMsT0FBQSxPQUNBQyxJQUFBLGdDQUNBQyxTQUNBQyxjQUFBLDRCQUNBQyxlQUFBLHFDQUVBeEIsS0FBQWtCLEVBR0F6QixHQUFBMEIsR0FBQU0sS0FBQSxTQUFBQyxHQUNBekIsUUFBQUMsSUFBQXdCLEVBQUExQixLQUFBQSxLQUFBMkIsT0FDQSxTQUFBRCxHQUNBekIsUUFBQUMsSUFBQXdCLEtBSUEsUUFBQUUsR0FBQUMsR0FDQUMsRUFBQUMsVUFBQUMsT0FBQSxVQUNBQyxFQUFBRixVQUFBQyxPQUFBLFVBQ0FFLEVBQUFILFVBQUFDLE9BQUEsVUFDQUgsRUFBQUUsVUFBQUksSUFBQSxVQXZGQSxHQUFBQyxHQUFBQyxTQUFBQyxjQUFBLHlCQUNBUixFQUFBTyxTQUFBQyxjQUFBLGtCQUNBTCxFQUFBSSxTQUFBQyxjQUFBLHVCQUNBSixFQUFBRyxTQUFBQyxjQUFBLHNCQUVBM0MsR0FBQTRDLE9BQUFGLFNBQUFHLGdCQUFBVCxVQUFBVSxTQUFBLFVBQ0E5QixFQUFBK0IsU0FBQS9DLEVBQUE0QyxPQUNBNUIsRUFBQWdDLE9BQUEsTUFHQVAsRUFBQVEsaUJBQUEsU0FBQSxTQUFBQyxHQUNBQSxFQUFBQyxnQkFHQSxLQUFBLEdBRkFDLEdBQUFGLEVBQUFHLE9BQUFELE1BRUFFLEVBQUEsRUFBQUEsRUFBQUYsRUFBQUcsT0FBQUQsSUFBQSxDQUNBLEdBQUEvQixHQUFBNkIsRUFBQUUsRUFFQSxLQUFBL0IsRUFBQWlDLEtBQUFDLE1BQUEsV0FHQSxNQUFBQyxPQUFBLDRCQUZBcEMsR0FBQUMsTUFPQVksRUFBQWMsaUJBQUEsUUFBQSxTQUFBQyxHQUNBZixFQUFBQyxVQUFBVSxTQUFBLFdBQ0FiLEVBQUFFLEtBSUFHLEVBQUFXLGlCQUFBLFFBQUEsU0FBQUMsR0FDQVosRUFBQUYsVUFBQVUsU0FBQSxXQUNBYixFQUFBSyxLQUlBQyxFQUFBVSxpQkFBQSxRQUFBLFNBQUFDLEdBQ0FYLEVBQUFILFVBQUFVLFNBQUEsV0FDQWIsRUFBQU0sS0FLQU4sRUFBQUUsR0FDQWxCLElBOENBRCxFQUFBMkMsVUFBQSxXQUNBM0MsRUFBQStCLFNBQUEvQixFQUFBK0IsU0FwR0FwRCxRQUNBQyxPQUFBLE9BQ0FnRSxXQUFBLGlCQUFBN0MsR0FFQUEsRUFBQUYsU0FBQSxRQUFBLGtCQUFBLFNBQUEsaUJDUEEsU0FBQWdELElBQUEsMlRBQUFDLEtBQUFELElBQUEsMGtEQUFBQyxLQUFBRCxFQUFBRSxPQUFBLEVBQUEsTUFBQXJCLFNBQUFHLGdCQUFBVCxVQUFBSSxJQUFBLFdBQUF3QixVQUFBQyxXQUFBRCxVQUFBRSxRQUFBQyxPQUFBQyxPQ0FBekUsUUFBQUMsT0FBQSxPQUFBeUUsUUFBQSxpQkFBQSxTQUFBQyxHQUNBQSxFQUVBQyxLQUFBLEtBQ0FDLFlBQUEsWUFDQVosV0FBQSxtQkFFQWEsV0FDQUMsV0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgICAgICAgJ2ZpcmViYXNlJyxcclxuICAgICAgICAnbXlBcHAuY29uZmlnJyxcclxuICAgICAgICAnbmdBbmltYXRlJyxcclxuICAgICAgICAnbmdSb3V0ZScsXHJcbiAgICAgICAgJ3ZBY2NvcmRpb24nXHJcbiAgICBdKVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIGFuZ3VsYXJcclxuICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAuZmFjdG9yeSgnRGF0YWJhc2VGYWN0b3J5JywgRGF0YWJhc2VGYWN0b3J5KTtcclxuXHJcbiAgRGF0YWJhc2VGYWN0b3J5LiRpbmplY3QgPSBbJyRodHRwJywgJ2RhdGFiYXNlVXJsJywgJyRyb290U2NvcGUnXTtcclxuXHJcbiAgLyogQG5nSW5qZWN0ICovXHJcbiAgZnVuY3Rpb24gRGF0YWJhc2VGYWN0b3J5KCRodHRwLCBkYXRhYmFzZVVybCwgJHJvb3RTY29wZSkge1xyXG4gICAgdmFyIHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0Q29uY2VybnM6IGdldENvbmNlcm5zLFxyXG4gICAgICAgIC8vIHBvc3RTdGF0dXNDaGFuZ2U6IHBvc3RTdGF0dXNDaGFuZ2VcclxuICAgIH07XHJcbiAgICByZXR1cm4gc2VydmljZTtcclxuXHJcbiAgICAvLy8vLy8vLyBmdW5jdGlvbiBkZWZpbml0aW9ucyAvLy8vL1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvbmNlcm5zKGNhbGxiYWNrKSB7XHJcbiAgICAgICRodHRwLmdldChkYXRhYmFzZVVybCArICcvY29uY2VybnMnKVxyXG4gICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygneWVzc3NzJyk7XHJcbiAgICAgICAgICBjYWxsYmFjayhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpZG4ndCBnZXQgY29uY2VybnMgcHJvcGVybHlcIiArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiBwb3N0U3RhdHVzQ2hhbmdlKGNvbmNlcm5faWQsIHN0YXR1cykge1xyXG4gICAgLy8gICAgICRodHRwLnBvc3QoZGF0YWJhc2VVcmwgKyAnL2NvbmNlcm5zLmpzb24vJyArIGNvbmNlcm5faWQgKyAnL3N0YXR1cy8nICsgc3RhdHVzKS5zdWNjZXNzKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2NvbmNlcm4gcG9zdGVkIScpO1xyXG4gICAgLy8gICAgIH0pLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgLy8gICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjonKTtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdteUFwcC5jb25maWcnLCBbXSlcclxuLmNvbnN0YW50KCdkYXRhYmFzZVVybCcsIFwiaHR0cHM6Ly9jYW1hYmlzLmhlcm9rdWFwcC5jb20vYXBpXCIpO1xyXG5cclxuXHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhclxyXG4gICAgICAgIC5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpO1xyXG5cclxuICAgIEhvbWVDb250cm9sbGVyLiRpbmplY3QgPSBbJyRodHRwJywgJ0RhdGFiYXNlRmFjdG9yeScsICckc2NvcGUnLCAnJHJvb3RTY29wZSddO1xyXG5cclxuICAgIGZ1bmN0aW9uIEhvbWVDb250cm9sbGVyKCRodHRwLCBEYXRhYmFzZUZhY3RvcnksICRzY29wZSwgJHJvb3RTY29wZSkge1xyXG4gICAgICAgIC8qIEVsZW1lbnQgc2VsZWN0b3JzIGFuZCBzY29wZSB2YXJpYWJsZXMgKi9cclxuICAgICAgICB2YXIgdXBsb2FkUGhvdG9FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0ndXBsb2FkLXBob3RvJ11cIik7XHJcbiAgICAgICAgdmFyIGdvTmV3RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW3JvbGU9J2dvTmV3J11cIik7XHJcbiAgICAgICAgdmFyIGdvUmVzb2x2ZWRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbcm9sZT0nZ29SZXNvbHZlZCddXCIpO1xyXG4gICAgICAgIHZhciBnb05vbmlzc3VlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW3JvbGU9J2dvTm9uaXNzdWUnXVwiKTtcclxuXHJcbiAgICAgICAgJHJvb3RTY29wZS5tb2JpbGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2JpbGUnKTtcclxuICAgICAgICAkc2NvcGUuc2hvd05hdiA9ICRyb290U2NvcGUubW9iaWxlID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zdGF0dXMgPSAnbmV3JztcclxuXHJcbiAgICAgICAgLyogRXZlbnQgTGlzdGVuZXJzICovXHJcbiAgICAgICAgdXBsb2FkUGhvdG9FbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBmaWxlc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS50eXBlLm1hdGNoKC9pbWFnZS4qLykpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRQaG90byhmaWxlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiT25seSBpbWFnZXMgYXJlIGFjY2VwdGVkLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBnb05ld0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFnb05ld0VsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIG1ha2VBY3RpdmUoZ29OZXdFbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ29SZXNvbHZlZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFnb1Jlc29sdmVkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgbWFrZUFjdGl2ZShnb1Jlc29sdmVkRWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdvTm9uaXNzdWVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghZ29Ob25pc3N1ZUVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIG1ha2VBY3RpdmUoZ29Ob25pc3N1ZUVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKiBJbml0aWF0ZSAqL1xyXG4gICAgICAgIG1ha2VBY3RpdmUoZ29OZXdFbCk7XHJcbiAgICAgICAgYWN0aXZhdGUoKTtcclxuXHJcbiAgICAgICAgLyogRnVuY3Rpb24gRGVmaW5pdGlvbnMgKi9cclxuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hvbWUgYWN0aXZhdGVkJyk7XHJcbiAgICAgICAgICAgIGdldEptYXAoKTtcclxuICAgICAgICAgICAgRGF0YWJhc2VGYWN0b3J5LmdldENvbmNlcm5zKGZ1bmN0aW9uIChjb25jZXJucykge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbmNlcm5Db250YWluZXIgPSBjb25jZXJucztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmNlcm5zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRKbWFwKCkge1xyXG4gICAgICAgICAgICAkaHR0cC5nZXQoJ2ptYXAuanNvbicpLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5qbWFwID0gZGF0YTtcclxuICAgICAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpZG4ndCBnZXQgam1hcCBwcm9wZXJseVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB1cGxvYWRQaG90byhmaWxlKSB7XHJcbiAgICAgICAgICAgIHZhciByZXEgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmltZ3VyLmNvbS8zL2ltYWdlJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdDbGllbnQtSUQgYTgzYjhkNDg0ODg2OTM4JyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBmaWxlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRodHRwKHJlcSkudGhlbihmdW5jdGlvbiBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGEubGluayk7XHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIGVyciAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VBY3RpdmUoZWwpIHtcclxuICAgICAgICAgICAgZ29OZXdFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZ29SZXNvbHZlZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBnb05vbmlzc3VlRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogU2NvcGUgRnVuY3Rpb25zICovXHJcbiAgICAgICAgJHNjb3BlLnRvZ2dsZU5hdiA9IGZ1bmN0aW9uICgpICB7XHJcbiAgICAgICAgICAgICRzY29wZS5zaG93TmF2ID0gISRzY29wZS5zaG93TmF2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSlkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKX0pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XHJcbiAgICAkcm91dGVQcm92aWRlclxyXG5cclxuICAgICAgICAud2hlbignLycsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdob21lLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSG9tZUNvbnRyb2xsZXInXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub3RoZXJ3aXNlKHtcclxuICAgICAgICAgICAgcmVkaXJlY3RUbzogJy8nXHJcbiAgICAgICAgfSk7XHJcblxyXG59XSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
