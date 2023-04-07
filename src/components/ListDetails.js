const ListDetails = ({result}) => {
    console.log({ result });

    const {word, phonetics, meanings} = result

    return (
        <div className="card mt-20">
        <div>
            <h3>Word</h3>
            <div className="flex">
            <p>{word}</p>

            </div>
        </div>

        </div>
    )
};

export default ListDetails