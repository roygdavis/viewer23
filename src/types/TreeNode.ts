export interface TreeNode {
    id: string;
    annotation_id: string | null;
    parent_ids: string[];
    partner_ids: string[];
    sex: string | null;
    first_name: string | null;
    last_name: string | null;
    relationship_id: string | null;
    up: number;
    down: number;
    num_shared: number;
    verified: boolean;
    edited: boolean;
    added_by_user: boolean;
    url: string | null;
}