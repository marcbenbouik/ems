import FormElement from "../formElement/FormElement";

function Formulaire() {
    return (
        <form action="">
            <FormElement title={"NOM ET PRENOM"} type1={"text"} type2={"type"} placeholder1={"NOM"} placeholder2={"PRENOM"} />
            <FormElement title={"NAISSANCE ET TAILLE"} type1={"date"} type2={"number"} placeholder1={"DATE DE NAISSANCE"} placeholder2={"TAILLE"} />
            <FormElement title={"GROUPE SANGUIN ET TELEPHONE"} type1={"text"} type2={"number"} placeholder1={"GROUPE SANGUIN"} placeholder2={"TELEPHONE"} />
        </form>
    )

}
export default Formulaire