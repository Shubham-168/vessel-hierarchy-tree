import { nodes } from '../../data/treeData';
import { buildParentMap } from "../../utils/parentMap";
import { findNodeByName } from "../../utils/findNode";
import { buildOpenPath } from "../../utils/buildOpenPath";

const parentMap = buildParentMap(nodes);

export default function SearchBar({ setExpanded }: any) {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (!val) return;

        const found = findNodeByName(nodes, val);
        if (!found) return;

        const path = buildOpenPath(found.id, parentMap);
        setTimeout(() => {
            setExpanded(path);
        }, 2000)
    };

    return (
        <input
            placeholder="Search"
            onChange={onChange}
            className="px-4 py-2 shadow rounded-lg"
        />
    );
}
