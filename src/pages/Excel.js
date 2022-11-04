import { Axios } from 'axios';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { momentumAction } from '../redux/actions/momentumAction'
import { stableAction } from '../redux/actions/stableAction';
import "../App.css";

const Excel = () => {
    const [files, setFiles] = useState(0);
    const dispatch = useDispatch();
    const momentumIndex = useSelector((state) => state.uploadData.momentumIndex.uploadTime);
    const stableIndex = useSelector((state) => state.uploadData.stableIndex.uploadTime);

    // 모멘텀파일 업로드 함수
      async function handleMomentumSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData();
        let file = files
        console.log("갓 생성 폼데이터", formData)
        formData.append("file", file);
        /* key 확인하기 */
        for (let key of formData.keys()) {
            console.log("키값",key);
        }

        /* value 확인하기 */
        for (let value of formData.values()) {
        console.log("밸류값",value);
        }
        console.log("files?", files)
        
        // 이후 삭제까지 한번에 이루어지도록 리팩토링 시도해보기..
        await Promise.all([
        dispatch(momentumAction.uploadMomentumAll(formData)),
        dispatch(momentumAction.uploadMomentum1Y(formData)),
        dispatch(momentumAction.uploadMomentum6M(formData)),
        dispatch(momentumAction.uploadMomentum3M(formData)),
        ]);
        }
      
        // 가공 및 인덱스 구하기 함수
        const momentumDataTrim = () => {
          dispatch(momentumAction.trimMomentumData1Y());
          dispatch(momentumAction.trimMomentumData6M());
          dispatch(momentumAction.trimMomentumData3M());
          }
          
        const momentumDataProcessing = () => {
          dispatch(momentumAction.momentumDataProcessing());        
          }

        const momentumDataDelete = () => {
          dispatch(momentumAction.momentumDataDelete());        
          }

        // 스테이블파일 업로드 함수
        async function handleStableSubmit(event) {
          event.preventDefault();
          
          const formData = new FormData();
          let file = files
          console.log("갓 생성 폼데이터", formData)
          formData.append("file", file);
          /* key 확인하기 */
          for (let key of formData.keys()) {
              console.log("키값",key);
          }
  
          /* value 확인하기 */
          for (let value of formData.values()) {
          console.log("밸류값",value);
          }
          console.log("files?", files)
          
          // 이후 삭제까지 한번에 이루어지도록 리팩토링 시도
          await Promise.all([
          dispatch(stableAction.uploadStableAll(formData)),
          dispatch(stableAction.uploadStable1Y(formData)),
          dispatch(stableAction.uploadStable6M(formData)),
          dispatch(stableAction.uploadStable3M(formData)),
          ]);
          }
          // 가공 및 인덱스 구하기 함수
          const stableDataTrim = () => {
          dispatch(stableAction.trimStableData1Y());
          dispatch(stableAction.trimStableData6M());
          dispatch(stableAction.trimStableData3M());
          }
          
          const stableDataProcessing = () => {
            dispatch(stableAction.stableDataProcessing());        
            }

          const stableDataDelete = () => {
            dispatch(stableAction.stableDataDelete());        
            }
  
          // 공통 처리함수
        const handleUpload = (event) => {
        event.preventDefault();
        console.log("handleupload", event)
        const file = event.target.files[0];
        setFiles(event.target.files[0]);
    
    }

    useEffect(() => {
      dispatch(momentumAction.getUploadData());
    }, [momentumIndex, stableIndex]);
      
  return (
    
      
      <div className='wrapper'>
        <br></br>
        <h1>SOYOUCRYPTO 데이터관리 페이지</h1>
        <br></br><br></br>
      <span>*Momentum File 업로드*</span>
        <form onSubmit = {handleMomentumSubmit} >
            <input onChange={handleUpload} type="file" />
            <input type="submit" value="제출"/>
      </form>
      <br></br>
      <button variant="primary" type="submit" onClick={momentumDataTrim}>데이터 기간별 나누기</button> &nbsp; &nbsp; &nbsp;
      <button variant="primary" type="submit" onClick={momentumDataProcessing}>데이터 가공, 인덱스 계산</button> 
      <button variant="primary" type="submit" onClick={momentumDataDelete}>기존 데이터 삭제</button> 
      <div>최근 업로드 일시: {momentumIndex}</div>
      <br></br><br></br><br></br><br></br><br></br><br></br>

      <span>*StableOnly File 업로드*</span>
      <form onSubmit = {handleStableSubmit} >
            <input onChange={handleUpload} type="file" />
            <input type="submit" value="제출"/>
      </form>
      <br></br>
      <button variant="primary" type="submit" onClick={stableDataTrim}>데이터 기간별 나누기</button> &nbsp; &nbsp; &nbsp;
      <button variant="primary" type="submit" onClick={stableDataProcessing}>데이터 가공, 인덱스 계산</button> 
      <button variant="primary" type="submit" onClick={stableDataDelete}>기존 데이터 삭제</button> 
      <div>최근 업로드 일시: {stableIndex}</div>
      </div>
    
   
  )
}

export default Excel
