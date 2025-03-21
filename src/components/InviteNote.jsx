import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="invite-note-wrapper">
                <h5>An Invitation from:</h5>
                <h2>Mr. & Mrs. Chanderbande Mohammed Jaffer Quadri</h2>

                {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
                <h5 className="address mb-3">
                    Residence: Silpa Elite Apartments,
                    <br /> Opposite Chekuri Lodge,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> Andhra Pradesh - 518 301.
                </h5>
                <p className="address">
                    Contact:
                    <br /> +91 99492 40408,
                    <br /> +91 91216 13928.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
