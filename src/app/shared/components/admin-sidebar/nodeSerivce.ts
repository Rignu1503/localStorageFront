import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  getTreeNodesData() {
    return Promise.resolve([
      {
        key: '0',
        label: 'Productos',
        icon: 'pi pi-fw pi-folder',
        children: [
          {
            key: '0-0',
            label: 'Listado',
            icon: 'pi pi-cloud-upload',
            data: '/admin/products', // Ruta para "Crear"
          },

        ],
      },
      {
        key: '1',
        label: 'Proveedores',
        icon: 'pi pi-fw pi-folder',
        children: [
          {
            key: '1-0',
            label: 'Añadir proveedor',
            icon: 'pi pi-fw pi-file',
            data: '/admin/suppliers/add', // Ruta para "Añadir proveedor"
          },
          {
            key: '1-1',
            label: 'Ver todos',
            icon: 'pi pi-fw pi-file',
            data: '/admin/suppliers/list', // Ruta para "Ver todos"
          },
        ],
      },
    ]);
  }
}
