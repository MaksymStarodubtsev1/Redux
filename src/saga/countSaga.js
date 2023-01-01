const delay = (ms) => new Promise(res => setTimeout(res,ms))

function* incrementWorker() {
  yield delay(1000)
  yield put(incrementCreator())
}