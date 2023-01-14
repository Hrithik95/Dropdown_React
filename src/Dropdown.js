import { useState } from "react";

const Dropdown = () => {

    const [show, setshow] = useState(false);
    const [items] = useState(['Yes', 'Probably not']);

    const hideList = (e) => {
        setshow(false);
    }

    const Dropdown = () => {
        setshow(true);
    }

    const contents = items.map((item) => {
        return <a href="#" onClick={hideList} >{item}</a>;
    })

    return (
        <div style={{display:"flex",justifyContent:"center",marginTop:150}}>
            <div className="dropdown" >
                <h1>Should you use a dropdown?</h1>
                <button className="selectbtn" onMouseEnter={Dropdown}>Select</button>
                  <div className="dropdown_content" style={{ display: `${show ? 'block' : 'none'}` }}>
                   {contents}
                  </div>
            </div>

        </div>
        
    );
}

export default Dropdown;