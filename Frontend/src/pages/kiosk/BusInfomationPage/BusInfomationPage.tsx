import { FC } from "react";
import { BusInfomationPageProps } from ".";
import { KioskHeader } from "../../../components/kiosk/KioskHeader";
import { ComingSoonBusList } from "../../../components/kiosk/ComingSoonBusList";
import { ArrivalBusList } from "../../../components/kiosk/ArrivalBusList";
import { LivingInformationBox } from "../../../components/kiosk/LivingInfomationBox";
import { BottomButtonBox } from "../../../components/kiosk/BottomButtonBox";
import {
  BusData,
  BusStoreData,
  KioskState,
  updateBusData,
  updateLockedBusData,
} from "../../../store/slice/kiosk-slice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { busAPI } from "../../../store/api/api";
import { useQuery, QueryClient } from "react-query";
import { AxiosError } from "axios";

export const BusInfomationPage: FC<BusInfomationPageProps> = (props) => {
  const [comingSoonBusList, setComingSoonBusList] = useState<BusData[]>([]);
  const [oldData, setOldData] = useState<BusStoreData[]>([]);

  const dispatch = useDispatch();

  const data: KioskState = useSelector(
    (state: { kiosk: KioskState; web: object }) => {
      return state.kiosk;
    }
  );

  const [pages, setPage] = useState<BusStoreData[][]>([]);

  useEffect(() => {
    // 12분 이내 도착 예정인 버스 리스트
    setComingSoonBusList(
      data.busData.slice(0, 5).filter((el: BusData) => {
        // 임시로 120분
        return el.eta <= 900;
      })
    );
  }, [data.busData]);

  const fetchBusData = useQuery(
    "fetchBus",
    () => {
      busAPI
        .get(`/${data.citycode}/${data.busStopId}`, {
          timeout: 5000,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.code == "500") {
            console.log("500 Error: " + response.data.msg);
          } else if (response.data.code == "200") {
            // 도착예정시간 순으로 정렬해서 저장
            setOldData(data.busData);

            const postingBusList = oldData.filter((el) => {
              const sameBus = response.data.data.find(
                (newel) => newel.vehicleNo == el.vehicleNo
              );
              return el.isPosted == false && sameBus.remainingStops == 1;
            });
            console.log(postingBusList);

            postingBusList.map((el) => {
              busAPI
                .post(
                  `/station/${data.citycode}/${data.busStopId}/${el.vehicleNo}`,
                  {
                    busStation: `${data.busStopId}`,
                    count: `${el.passengerNumber}`,
                    vehicleNo: `${el.vehicleNo}`,
                    routeNo: `${el.routeId}`,
                    vulnerable: `${el.isVulnerable}`,
                  }
                )
                .then((response) => {
                  console.log(response);
                  dispatch(updateLockedBusData(postingBusList));
                })
                .catch((error) => {
                  console.log(error);
                });
            });
            dispatch(
              updateBusData(
                response.data.data.sort((a: BusData, b: BusData) => {
                  return a.eta - b.eta;
                })
              )
            );
          }
        })
        .catch((error) => {
          const err = error as AxiosError;
          console.error("Error fetching buslist data:");
          throw err;
        });
    },
    { staleTime: 1000, refetchInterval: 5000 }
  );

  useEffect(() => {
    // console.log(fetchBusData);
  }, [fetchBusData]);

  const paginateArray = (arr: BusStoreData[], pageSize: number) => {
    const pageCount = Math.ceil(arr.length / pageSize);
    const pagelist = Array.from({ length: pageCount }, (_, index) => {
      const startIndex = index * pageSize;
      return arr.slice(startIndex, startIndex + pageSize);
    });
    return pagelist;
  };

  useEffect(() => {
    // 페이지 지정
    setPage(paginateArray(data.busData, 4));
  }, [data.busData]);

  return (
    <div style={{ backgroundColor: "#ECF0F3", maxWidth: "2160px" }} {...props}>
      <KioskHeader />
      <ComingSoonBusList data={comingSoonBusList ? comingSoonBusList : []} />
      <ArrivalBusList pages={pages ? pages : []} />
      <LivingInformationBox />
      <BottomButtonBox pages={pages ? pages : []} />
    </div>
  );
};
