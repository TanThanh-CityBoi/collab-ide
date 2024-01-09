const REDIS_EVENT = {
    ERROR: "error"
}

const SOCKET_IO_EVENT = {
    CONNECTION: 'connection',
    CODE_CHANGED: 'CODE_CHANGED',
    CONNECTED_TO_ROOM: 'CONNECTED_TO_ROOM',
    ROOM_CONNECTION: 'ROOM:CONNECTION',
    ROOM_DISCONNECT: 'ROOM:DISCONNECT',
    DISCONNECT: 'disconnect',
    DB_ERROR: 'DB_ERROR',
    CODE_INSERT: "CODE_INSERT",
    CODE_REPLACE: "CODE_REPLACE",
    CODE_DELETE: "CODE_DELETE",
    OUTPUT_CHANGED: "OUTPUT_CHANGED",
    CURSOR_CHANGED: 'CURSOR_CHANGED',
    SELECTION_CHANGED: 'SELECTION_CHANGED',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
    CHANGE_VERSION: 'CHANGE_VERSION',
    COMPILE_STATE_CHANGED: 'COMPILE_STATE_CHANGED',
    COLOR_CHANGED: 'COLOR_CHANGED',
    TOGGLE_MICROPHONE: 'TOGGLE_MICROPHONE',
    TOGGLE_CAMERA: 'TOGGLE_CAMERA',
    CHAT_MESSAGE: 'CHAT_MESSAGE',
    LISTEN_TO_SPEAKER: 'LISTEN_TO_SPEAKER',
}

const FRONT_END_URL = "https://colaborative-ide-socket.web.app"
const COMPILER_URL = "https://api.jdoodle.com/v1/execute"

module.exports = { REDIS_EVENT, SOCKET_IO_EVENT, FRONT_END_URL, COMPILER_URL }