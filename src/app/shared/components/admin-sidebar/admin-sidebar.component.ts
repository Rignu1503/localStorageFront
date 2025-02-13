import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from './nodeSerivce';

@Component({
  selector: 'shared-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  standalone: false
})
export class AdminSidebarComponent implements OnInit {
  files!: TreeNode[];
  

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getTreeNodesData().then((data) => (this.files = data));
  }

}
