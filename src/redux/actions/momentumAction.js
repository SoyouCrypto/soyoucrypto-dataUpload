import api from "../api"


//csv 업로드
function uploadMomentumAll(formData){
    return async (dispatch) => {
        const excelUpload = api.post(`csv/momentumDataAll`,
        formData,
        {
            headers: {
              "content-type": "multipart/form-data"
            }
          })}
}

function uploadMomentum1Y(formData){
    return async (dispatch) => {
        const excelUpload = api.post(`csv/momentumData1Y`,
        formData,
        {
            headers: {
              "content-type": "multipart/form-data"
            }
          })}
}

function uploadMomentum6M(formData){
    return async (dispatch) => {
        const excelUpload = api.post(`csv/momentumData6M`,
        formData,
        {
            headers: {
              "content-type": "multipart/form-data"
            }
          })}
}

function uploadMomentum3M(formData){
    return async (dispatch) => {
        const excelUpload = api.post(`csv/momentumData3M`,
        formData,
        {
            headers: {
              "content-type": "multipart/form-data"
            }
          })}
}

//엑셀 업로드
function postExcel2(formData){
    return async (dispatch) => {
        const excelUpload = api.post(`excel/read2`,
        formData,
        {
            headers: {
              "content-type": "multipart/form-data"
            }
            
          })
          console.log("우리가 promiseAll 후에 받는 데이터는?")
}
}

//기간 외 데이터 삭제
function trimMomentumData1Y(){
  return async (dispatch) => {
      const excelUpload = api.delete(`momentum/dataTrim1Y`,      
        )}
  }

function trimMomentumData6M(){
  return async (dispatch) => {
      const excelUpload = api.delete(`momentum/dataTrim6M`,      
        )}
  }
function trimMomentumData3M(){
  return async (dispatch) => {
      const excelUpload = api.delete(`momentum/dataTrim3M`,      
        )}
  }

  // 데이터 가공, 인덱스 계산
function momentumDataProcessing(){
  return async (dispatch) => {
      const momentumDtaProcessing = api.put(`excel/calcMomentumIndex`,      
        )}
  }

  // 기존 데이터 삭제
  function momentumDataDelete(){
    return async (dispatch) => {
        const dataDelete = api.delete(`momentum/dataDelete`,      
          )}
    }
  
    // 최근 업로드 일시 조회

  function getUploadData(){
    return async (dispatch) => {
      const momentumIndexApi = api.get(`momentum/index?type=MOMENTUMALL`)
      const stableIndexApi = api.get(`stable/index?type=STABLEALL`)

      let [stableIndex, momentumIndex,] = await Promise.all([
        stableIndexApi, momentumIndexApi]);

        dispatch({
          type:"GET_UPLOAD_DATA",
          payload: { 
              stableIndex : stableIndex.data, 
              momentumIndex : momentumIndex.data, 
          },
      })
          }
    }
  

  

export const momentumAction = {
    uploadMomentumAll, postExcel2, uploadMomentum1Y, uploadMomentum6M, uploadMomentum3M, trimMomentumData1Y, trimMomentumData6M, trimMomentumData3M, momentumDataProcessing, momentumDataDelete, getUploadData
}