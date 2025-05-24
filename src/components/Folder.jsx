import React, { useState } from 'react'

const Folder = ({handleInsertNode, handleDeleteNode, explorer}) => {

    const [expand, setExpand] = useState(false)
    const [inputValue, setInputValue] = useState({
        isFolder: null,
        visible: false
    })

    const handleVisible = (e, isFolder)=>{
        e.stopPropagation(); 
        setExpand(true)
        setInputValue({
            isFolder: isFolder,
            visible: true
        })
    }

    const handleAddFolder= (e)=>{
        if(e.keyCode===13 && e.target.value){
            handleInsertNode(explorer.id, e.target.value, inputValue.isFolder)
            setInputValue({...inputValue, visible: false})
        }
    }

    const handleDeleteFolder = ()=>{
        handleDeleteNode(explorer.id)
    }

    
    if(explorer.isFolder){
        return(
            <div style={{marginTop: 5}}>
                <div className='folder' onClick={()=> setExpand(!expand)}>
                    <span>📁 {explorer.name}</span>
                    <div className='d-flex gap-3'>
                        <button onClick={handleDeleteFolder}>D</button>
                        <button onClick={(e)=> handleVisible(e, true)}>Folder+</button>
                        <button  onClick={(e)=> handleVisible(e, false)}>File+</button>
                    </div>
                </div>
                <div style={{display: expand ? 'block': 'none', paddingLeft: 10}} >
                    {inputValue.visible && (
                    <div className='inputContainer'>
                        <span>{inputValue.isFolder ? '📁' : '📄'}</span>
                        <input onKeyDown={handleAddFolder} onBlur={()=>setInputValue({...inputValue, visible: false})} autoFocus/>
                    </div>
                    )}
                    {explorer.items.map((exp)=>{
                        return(
                            <Folder handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} explorer={exp} key={exp.id}/>
                        )
                    })}
                </div>
            </div>
        )
    } else{
        return <span className='file'>📄 {explorer.name}</span>
    }
}

export default Folder