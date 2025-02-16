export { ErrorLogInfo } from './src/errorLog/errorLog';
export { EventInfo } from './src/event/event';
export { GroupInfo } from './src/group/group';
export { MailConfigFormValues } from './src/mailConfigForm/mailConfigForm';
export { PasswordRecoveryInfo } from './src/passwordRecovery/passwordRecovery';
export { ProfessionInfo } from './src/profession/profession';
export { ProgramInfo, SedeType } from './src/program/program';
export { RoleInfo } from './src/role/role';
export { RoutingData } from './src/route/routingData';
export { RouteConfig, NavigationItem, STORAGE_KEY } from './src/route/routeConfig';
export { Shift } from './src/shift/shift';
export { ShiftInGroupInfo, ShiftDayInfo } from './src/group/shiftInGroup';
export { SessionInfo } from './src/session/session';
export { Request, RequestStatus, RequestType } from './src/request/request';
export { UsedCollections } from './src/usedCollections/usedCollections';
export { UserRole, UserInfo } from './src/user/user';
/**
 * Colecciones de Firestore.
 */
export declare enum FirestoreCollections {
    /** Colección de {@link ErrorLogInfo}. */
    ErrorLogInfo = "errorLogInfo",
    /** Colección de {@link EventInfo}. */
    EventInfo = "eventInfo",
    /** Colección de {@link GroupInfo}. */
    GroupInfo = "groupInfo",
    /** Colección de {@link PasswordRecoveryInfo}. */
    PasswordRecoveryInfo = "passwordRecoveryInfo",
    /** Colección de {@link ProfessionInfo}. */
    ProfessionInfo = "professionInfo",
    /** Colección de {@link ProgramInfo}. */
    ProgramInfo = "programInfo",
    /** Colección de {@link RoleInfo}. */
    RoleInfo = "roleInfo",
    /** Colección de {@link RoutingData}. */
    RoutingData = "routingData",
    /** Colección de {@link RouteConfig}. */
    RouteConfig = "routeConfig",
    /** Colección de {@link Shift}. */
    Shift = "shift",
    /** Colección de {@link ShiftInGroupInfo}. */
    ShiftInGroupInfo = "shiftInGroupInfo",
    /** Colección de {@link SessionInfo}. */
    SessionInfo = "sessionInfo",
    /** Colección de {@link Request}. */
    Request = "request",
    /** Colección de {@link UserInfo}. */
    userInfo = "userInfo"
}
