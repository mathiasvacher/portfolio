import React from "react";
import Swal from 'sweetalert2';

function Contact() {

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();  

        const formData = new FormData(event.target as HTMLFormElement); // On cast event.target pour être sûr que c'est un HTMLFormElement
        formData.append("access_key", "3af5a57a-6822-4090-aad6-b7391e489df6");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Bien reçu !",
                text: "Merci pour votre message, je vous recontacte au plus vite !",
                icon: "success"
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oups...",
                text: "Quelque chose a dû mal se passer... N'hésitez pas à ressayer dans un moment!",
            });
        }        
    };

  return (
    <section id="contact">
        <div className="gradient">
            <form onSubmit={onSubmit}>
                <h2>Écrivez-moi !</h2>
                <p>Que vous souhaitiez collaborer ou simplement discuter d'une idée, n'hésitez pas à me contacter !</p>

                <div className="input-box" >
                    <label>Votre nom</label>
                    <input type="text" className="field" placeholder='Jean Dupont' name='name' required />
                </div>

                <div className="input-box" >
                    <label>Votre adresse mail</label>
                    <input type="email" className="field" placeholder='jean.dupont@gmail.com' name='email' required />
                </div>

                <div className="input-box" >
                    <label>Votre message</label>
                    <textarea name='message' className="field mess" placeholder='Bonjour Mathias, je souhaite te parler de ...!' required />
                </div>

                <input type="hidden" name="subject" value="Nouveau contact sur le site mathiasvacher.fr"/>

                <button className="bouton" type="submit">Envoyer</button>
            </form>
        </div>
    </section>
  );
}

export default Contact;
