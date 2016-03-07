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
		template: '<div class="modal-dialog modal-md vertical-align-center" role="document">'+
					'<div class="modal-content">'+
						'<div class="modal-header">'+
							'<button type="button" class="close" data-dismiss="modal" aria-label="Fechar"><span aria-hidden="true">×</span></button>'+
							'<h4 class="modal-title" id="myModalLabel">Alert Mensagem</h4>'+
						'</div>'+
						'<div class="modal-body">'+
							'<h4>Deseja Realmente Deletar o TODO?</h4>'+
						'</div>'+
						'<div class="modal-footer">'+
						    '<button type="button" class="btn btn-default" data-dismiss="modal" ng-click="confirmAlert()">Confirmar</button>'+
							'<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>'+
						'</div>'+
					'</div>'+
				'</div>'
	};
});