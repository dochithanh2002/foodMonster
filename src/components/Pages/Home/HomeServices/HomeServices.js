import React from "react";
import { BsStarFill } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import "./HomeServices.css";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useState, useEffect } from "react";

const HomeServices = () => {
  const services = useLoaderData();
  const newData = services.slice(0, 3);

  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    fetch(
      `http://${process.env.REACT_APP_BACKEND_URL}:8000/api/eateries/user_favourite`,
      {
        headers: {
          "user-id": 1,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

  return (
    <div className="p-4 bg-white ">
      <div className="my-12 text-center">
        <h2 className="text-4xl font-bold text-black">Gợi ý cho bạn</h2>
        <p className="pt-5 text-black-500">Dễ dàng tìm dược món ăn yêu thích</p>
      </div>
      <div className="mx-auto md:w-11/12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {newData.length > 0 ? (
            newData.map((service) => (
              <div key={service.id}>
                <div className="w-full shadow-xl card serviceCard md:mx-0 bg-zinc-100">
                  <PhotoProvider>
                    <PhotoView key={service.id} src={service?.media[0]?.link}>
                      <figure>
                        <img
                          className="object-cover w-full rounded-t-lg h-72"
                          src={service?.media[0]?.link}
                          alt="Shoes"
                        />
                      </figure>
                    </PhotoView>
                  </PhotoProvider>
                  <div className="text-black card-body">
                    <h2 className="text-xl card-title">{service?.name}</h2>
                    <div className="flex items-center">
                      {service.rating >= 1 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service.rating >= 1.5 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service.rating >= 2.5 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service.rating >= 3.5 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service.rating >= 4.5 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service?.rating}
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center mr-3 text-sm">
                        <RiEBike2Fill className="mr-2 color-red" />
                        {service?.location.slice(0, 40) +
                          (service?.location.length > 40 ? "..." : "")}
                      </span>
                    </div>
                    <p>
                      Nổi bật:
                      {" " +
                        service?.food_drinks[0]?.name +
                        (service?.food_drinks[1]?.name
                          ? ", " + service?.food_drinks[1]?.name + ", "
                          : "") +
                        (service?.food_drinks[2]?.name
                          ? service?.food_drinks[2]?.name + ", " + "..."
                          : "")}
                    </p>
                    <div className="card-actions justify-end">
                      <Link
                        to={`/foodMonster/services/${service.id}`}
                        className="badge"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="flex items-center pb-8 text-xl text-black ">
              Không tìm thấy nhà hàng. Hãy kiểm tra lại.
            </h4>
          )}
        </div>
        <div className="text-center mt-10">
          <Link to="/foodMonster/services" className="btn red-button">
            Xem thêm
          </Link>
        </div>
      </div>

      {/* Based on anket */}
      <div className="my-12 text-center">
        <h2 className="text-4xl font-bold text-black">
          Dựa trên sở thích của bạn
        </h2>
        <p className="pt-5 text-black-500">Dễ dàng tìm dược món ăn yêu thích</p>
      </div>
      <div className="mx-auto md:w-11/12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {suggestions.length > 0 ? (
            suggestions.map((service) => (
              <div key={service.id}>
                <div className="w-full shadow-xl card serviceCard md:mx-0 bg-zinc-100">
                  <PhotoProvider>
                    <PhotoView key={service.id} src={service?.media[0]?.link}>
                      <figure>
                        <img
                          className="object-cover w-full rounded-t-lg h-72"
                          src={service?.media[0]?.link}
                          alt="Shoes"
                        />
                      </figure>
                    </PhotoView>
                  </PhotoProvider>
                  <div className="text-black card-body">
                    <h2 className="text-xl card-title">{service?.name}</h2>
                    <div className="flex items-center">
                      {service.rating >= 1 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service.rating >= 1.5 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service.rating >= 2.5 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service.rating >= 3.5 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service.rating >= 4.5 && (
                        <BsStarFill className="star-color mr-1" />
                      )}
                      {service?.rating}
                    </div>
                    <div className="flex items-center">
                      <span className="flex items-center mr-3 text-sm">
                        <RiEBike2Fill className="mr-2 color-red" />
                        {service?.location.slice(0, 40) +
                          (service?.location.length > 40 ? "..." : "")}
                      </span>
                    </div>
                    <p>
                      Nổi bật:
                      {" " +
                        service?.food_drinks[0]?.name +
                        (service?.food_drinks[1]?.name
                          ? ", " + service?.food_drinks[1]?.name + ", "
                          : "") +
                        (service?.food_drinks[2]?.name
                          ? service?.food_drinks[2]?.name + ", " + "..."
                          : "")}
                    </p>
                    <div className="card-actions justify-end">
                      <Link
                        to={`/foodMonster/services/${service.id}`}
                        className="badge"
                      >
                        Xem thêm
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="flex items-center pb-8 text-xl text-black ">
              Không tìm thấy nhà hàng. Hãy kiểm tra lại.
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
