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
        <div>
          <div className="flex  flex-wrap ">
            {MeatFishData.map((data) => {
              return (
                <>
                  <Modal
                    key={data.id}
                    name={data.name}
                    content={data.content}
                    image={data.image}
                  />
                </>
              );
            })}
          </div>
          <div className="flex justify-center gap-6">
            <div>
              <Button>
                <Link to={"/"}>ホームに戻る</Link>
              </Button>
            </div>
            <div>
              <Button>
                <Link to={"/vegetables"} >野菜</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default MeatFish;
