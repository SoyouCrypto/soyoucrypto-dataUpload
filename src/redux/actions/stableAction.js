import api from "../api"


//csv 업로드
function uploadStableAll(formData){
    return async (dispatch) => {
        const excelUpload = api.post(`csv/stableDataAll`,
        formData,
        {
            headers: {
              "content-type": "multipart/form-data"
            }
          })}
}

function uploadStable1Y(formData){
    return async (dispatch) => {
        const excelUpload = api.post(`csv/stableData1Y`,
        formData,
        {
            headers: {
              "content-type": "multipart/form-data"
            }
          })}
}

function uploadStable6M(formData){
    return async (dispatch) => {
        const excelUpload = api.post(`csv/stableData6M`,
        formData,
        {
            headers: {
              "content-type": "multipart/form-data"
            }
          })}
}

function uploadStable3M(formData){
    return async (dispatch) => {
        const excelUpload = api.post(`csv/stableData3M`,
        formData,
        {
            headers: {
              "content-type": "multipart/form-data"
            }
          })}
}

//기간 외 데이터 삭제
function trimStableData1Y(){
  return async (dispatch) => {
      const excelUpload = api.delete(`stable/dataTrim1Y`,      
        )}
  }

function trimStableData6M(){
  return async (dispatch) => {
      const excelUpload = api.delete(`stable/dataTrim6M`,      
        )}
  }
function trimStableData3M(){
  return async (dispatch) => {
      const excelUpload = api.delete(`stable/dataTrim3M`,      
        )}
  }

  // 데이터 가공, 인덱스 계산
function stableDataProcessing(){
  return async (dispatch) => {
      const stableDataProcessing = api.put(`excel/calcStableIndex`,      
        )}
  }

// 기존 데이터 삭제
function stableDataDelete(){
  return async (dispatch) => {
      const dataDelete = api.delete(`stable/dataDelete`,      
        )}
  }

export const stableAction = {
    uploadStableAll, uploadStable1Y, uploadStable6M, uploadStable3M, trimStableData1Y, trimStableData6M, trimStableData3M, stableDataProcessing, stableDataDelete
}