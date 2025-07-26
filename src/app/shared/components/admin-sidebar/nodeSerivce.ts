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
            icon: 'pi pi-shopping-bag',
            data: '/admin/products', // Ruta para "Crear"
          },
          {
            key: '0-1',
            label: 'Categoria',
            icon: 'pi pi-th-large',
            data: '/admin/categories', // Ruta para "Crear"
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
            label: 'Proveedores',
            icon: 'pi pi-fw pi-file',
            data: '/admin/suppliers', // Ruta para proveedores
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
