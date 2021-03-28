import { Service } from "../types/api";
import values from "./MOCK_DATA.json";

export const getPromocodes = (search?: string) =>
  new Promise<Service[]>((resolve) => {
    setTimeout(
      () =>
        resolve(
          (values as Service[])
            .filter((value) =>
              search ? Boolean(value.name.match(new RegExp(search, "i"))) : true
            )
            .slice(0, 10)
        ),
      1000
    );
  });
