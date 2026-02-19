export default function ContactInfo(props) {
    return (
        <div className="contact_info">
            <h4 className="contact_title">{props.title}</h4>
            <span className="contact_data">{props.data}</span>
        </div>
    );
}