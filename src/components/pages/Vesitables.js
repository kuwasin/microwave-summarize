import React from 'react'
import { Link } from 'react-router-dom';
import { VesitablesData } from '../data/VesitablesData';
import Button from '../items/Button';
import { Modal } from '../items/Modal';
import PageLayout from '../PageLayout';

function vesitables() {
  return (
    <>
      <PageLayout>
        {VesitablesData.map((data) => {
           return (
             <>
               <Modal name={data.name} content={data.content} id={data.id} />
             </>
           );
        })}
        <Button>
          <Link to={"/"}>ホームに戻る</Link>
        </Button>
        <div>vesitables</div>
      </PageLayout>
    </>
  );
}

export default vesitables