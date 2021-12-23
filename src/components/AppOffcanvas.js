import Offcanvas from "react-bootstrap/Offcanvas";
import './AppOffcanvas.scss';

const AppOffcanvas = ({ type = 'default', showCanvas, closeCanvas, children, header }) => {
    const offcanvasClassName = 'app-offcanvas-' + type;
    return (
        <Offcanvas className={offcanvasClassName} show={showCanvas} placement={'end'} name={'end'} onHide={() => closeCanvas()} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{header}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {children}
            </Offcanvas.Body>
        </Offcanvas>
    )

}

export default AppOffcanvas;