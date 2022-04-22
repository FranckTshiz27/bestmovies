import React,{ useState ,useContext} from "react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";

const Pagination = ({ currentPage, getNexPage, getPreviewPage, totalPages }) => {
    let iconStyle = { color: "#2e487a", fontSize: "1.8em", cursor: "pointer" };

    return (
        <div className="paginate">
            <button onClick={getPreviewPage} ><BiChevronLeft style={iconStyle} /></button>
            <p>{currentPage}{totalPages ? ` / ${totalPages} ` : ''}</p>
            <button onClick={getNexPage} ><BiChevronRight style={iconStyle} /></button>
        </div>
    )

}

export default Pagination;