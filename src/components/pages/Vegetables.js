import React from "react";
import { Link } from "react-router-dom";
import { VegetablesData } from "../data/VegetablesData";
import Button from "../items/Button";
import { Modal } from "../items/Modal";
import PageLayout from "../PageLayout";

function Vegetables() {
  return (
    <>
      <PageLayout>
        <div>
          <div className="flex  flex-wrap ">
            {VegetablesData.map((data) => {
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
            <Button>
              <Link to={"/"}>ホームに戻る</Link>
            </Button>
            <Button>
              <Link to={"/meatfish"}>肉、魚</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default Vegetables;
