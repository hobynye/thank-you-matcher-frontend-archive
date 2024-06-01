import {Address} from "./address";

export interface Staff {
  id: number
  firstName: string
  lastName: string
  role: string
  section: string | undefined
  group: string | undefined
  address: Address
}
