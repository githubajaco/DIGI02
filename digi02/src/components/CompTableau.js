import './CompTableau.css';

export default function CompTableau(props) {
    return <div>
        <table border="3" cellPadding="10" align="center">
            <caption>Mon titre de tableau</caption>
            <tbody>
                <tr><th>{props.titreCol1}</th><th>{props.titreCol2}</th><th>{props.titreCol3}</th></tr>
            </tbody>
        </table>
    </div>
}