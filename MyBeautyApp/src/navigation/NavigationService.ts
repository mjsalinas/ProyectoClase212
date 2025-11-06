import {
  createNavigationContainerRef,
  NavigationState,
  PartialState,
} from "@react-navigation/native";
import { RootStackParamList } from "./StackNavigator";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

// Helpers opcionales (por si los quieres usar en otros lugares)
export function navigate<RouteName extends keyof RootStackParamList>(
  name: RouteName,
  params?: RootStackParamList[RouteName]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function resetTo(state: NavigationState | PartialState<NavigationState>) {
  if (navigationRef.isReady()) {
    navigationRef.reset(state);
  }
}
