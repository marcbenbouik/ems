function FormElement({ title, type1, type2, placeholder1, placeholder2 }) {
    return (
        <section>
            <h2>{title}</h2>
            <div>
                <input type={type1} placeholder={placeholder1} />
                <input type={type2} placeholder={placeholder2} />
            </div>
        </section>
    )
}

export default FormElement