import React from 'react';
import {IonPage,IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonMenuButton} from '@ionic/react'
import { useParams } from 'react-router';
import About from './about'
export default function Home () {
    const { name } = useParams();
  return (

    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{name}</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <About name={name} />
    </IonContent>
  </IonPage>

  );
}
