import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../items/Button';
import PageLayout from '../PageLayout';

function Others() {
  return (
    <>
      <PageLayout>
        <Button>
          <Link to={"/"}>ホームに戻る</Link>
        </Button>
        <div>Others</div>
      </PageLayout>
    </>
  );
}

export default Others