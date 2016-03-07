angular.module("alertMsg", [])
.directive("alertMsg", function(){
	return{
		link: function link(scope){
			scope.closeAlert = function(){
				$(".alertmsg").modal({backdrop:'static',show:false});
			};
			scope.confirmAlert = function(){
				scope.$emit('confirmDelete');
			};
		},
		templateUrl: "/templatemsg" 
	};
});