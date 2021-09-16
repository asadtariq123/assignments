function List({stu,index}) {
    
    return (
            <tr>
                <td>{index}</td>
            <td>{stu.name}</td>
            <td>{stu.class}</td>
            <td>{stu.cellno}</td>
            <td>{stu.email}</td>
            </tr>
            
            
        
    )
}
export default List;