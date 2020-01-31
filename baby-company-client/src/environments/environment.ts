// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dtOptions: {
    language: {
      "emptyTable": "Não foi encontrado nenhum registro",
      "loadingRecords": "A carregar...",
      "processing": "A processar...",
      "lengthMenu": "Mostrar _MENU_ registros",
      "zeroRecords": "Não foram encontrados resultados",
      "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
      "infoEmpty": "Mostrando de 0 até 0 de 0 registos",
      "infoFiltered": "(filtrado de _MAX_ registos no total)",
      "infoPostFix": "",
      "search": "Procurar:",
      "url": "",
      "paginate": {
        "first": "Primeiro",
        "previous": "Anterior",
        "next": "Seguinte",
        "last": "Último"
      },
      "aria": {
        "sortAscending": ": Ordenar colunas de forma ascendente",
        "sortDescending": ": Ordenar colunas de forma descendente"
      }
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
