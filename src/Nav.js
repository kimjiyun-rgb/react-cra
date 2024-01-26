import { useState } from "react";

function Nav(props)
{
    const list = props.list;
    const [data, setData] = useState(list);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateContent, setUpdateContent] = useState('');
    const [updateIndex, setUpdateIndex] = useState(-1);
    console.log('Nav');
    return (
        <nav>
            <button onClick={() =>
            {
                const new_data = [...data, 'React'];
                setData(new_data);
            }}>추가</button>

            <ul>
                <Routes>
                    {
                        data.map((v, i) =>
                        {
                            return (
                                <Route path={`/${i + 1}`} element={
                                    <li key={i}>
                                        <a href={`${i + 1}.html`}>{v}</a>

                                        <button onClick={() =>
                                        {
                                            setIsUpdate(true);
                                            setUpdateContent(data[i]);
                                            setUpdateIndex(i);
                                        }}>수정</button>

                                        <button onClick={() =>
                                        {
                                            const new_data = [...data];
                                            new_data.splice(i, 1);
                                            setData(new_data);
                                        }}>삭제</button>
                                    </li>}>
                                </Route>
                            )
                        })
                    }
                </Routes>
            </ul>

            {
                isUpdate ?
                    <div>
                        수정모드
                        <input type='text' id='content'
                            value={updateContent}
                            onChange={(e) =>
                            {
                                setUpdateContent(e.target.value);
                            }}
                        />
                        <button onClick={() =>
                        {
                            data[updateIndex] = updateContent;
                            const new_data = [...data];
                            setData(new_data);
                            setIsUpdate(false);
                        }}>완료</button>
                    </div> : null
            }


        </nav>
    );
}

export default Nav;