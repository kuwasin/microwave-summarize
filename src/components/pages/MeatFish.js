import React from "react";
import { Link } from "react-router-dom";
import Button from "../items/Button";
import { Modal } from "../items/Modal";
import PageLayout from "../PageLayout";
import { MeatFishData } from "../data/MeatFishData";
function MeatFish() {
  return (
    <>
      <PageLayout>
        {MeatFishData.map((data) => {
          return (
            <>
              <Modal name={data.name} content = {data.content} id= {data.id} />
            </>
          );
        })}
        <Button>
          <Link to={"/"}>ホームに戻る</Link>
        </Button>
        <div>MeatFish</div>
      </PageLayout>
    </>
  );
}

export default MeatFish;
