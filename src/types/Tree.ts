import { TreeNode } from "./TreeNode";

export interface Tree {
    id: string;
    tree_version: string;
    nodes: TreeNode[];
    last_scheduled: string;
    last_started: string;
    last_compute: string;
    is_computed: boolean;
    is_scheduled: boolean;
    in_progress: boolean;
    requires_recompute: boolean;
}