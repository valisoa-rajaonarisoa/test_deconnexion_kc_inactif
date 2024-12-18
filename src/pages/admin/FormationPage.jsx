import React, { useState } from 'react';

import FormationList from '../../components/admin/formation/FormationList';
import AddFormation from '../../components/admin/formation/AddFormation';
import PopUpAddFormation from '../../components/admin/formation/PopUpAddFormation';
import PopUpEditFormation from '../../components/admin/formation/PopUpEditFormation';
import { useKeycloak } from '../../context/KeycloakContext';

export default function FormationPage() {


  // ******************* importation de keycloak 
  const {keycloak:kc,authenticated}= useKeycloak();


  const [showPopup, setShowPopup] = useState(false);
  const [isClickEdit,setIsClickEdit]=useState(false)
 
    const toogleFormationPage = () => {
        setIsClickEdit(!isClickEdit);
    }

  return (
    <div>
      <h3 className='text-3xl font-bold text-blue-500 mb-5'>Les Formations</h3>

      {/* Bouton pour ajouter une formation */}
      {/* <AddFormation onAddClick={() => setShowPopup(true)} /> */}

      {/* Popup */}
      {showPopup && (
        <PopUpAddFormation onClose={() => setShowPopup(false)} />
      )}

      {
        isClickEdit && <PopUpEditFormation toogleFormationPage={toogleFormationPage} />
      }


      {/* Liste des formations */}
      <FormationList toogleFormationPage={toogleFormationPage} kc={kc} authenticated={authenticated}/>
    </div>
  );
}
