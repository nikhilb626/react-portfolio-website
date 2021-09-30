import React from "react";
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

function Git(props){
    return (<>
     <div className="repo_elements">
        <div className="repo_logo"><FolderOpenIcon /></div>
        <div className="repo">
            <div className="repo_name"><a href={props.link}>{props.repo}</a></div>
            <div className="repo_type">{props.type}</div>
        </div>
</div>

    </>
   )
}



export default Git;