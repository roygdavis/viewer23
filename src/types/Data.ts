import { Sharing } from "./Sharing";
import { Tree } from "./Tree";

export interface Data {
    trees: Tree[];
    health_trees: any[];
    annotations: any[];
    sharing: Sharing;
}