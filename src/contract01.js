module.exports = {
 ABI: [{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}] ,
 address: "0xc1576a8e89df1a7e33c8e5ef60f6cbd5616d3b72"
}



/**
 * 
 * 
 * pragma solidity ^0.4.0;


contract SimpleStorage {
    uint storedData;
    struct Patient {
        bytes32 name;
        uint weight; // weight is accumulated by delegation
        uint height;  // if true, that person already voted
        uint NHSNum;  //include timestamp
        bytes32 specialty;  
        bytes32 consultant;
        bytes32 diagnoses;
        uint Creatinite;
        uint Sodium;
        uint Potassium;
        uint eGFR;
        uint Urea;
    }
    Patient[] internal patients;

    //新增病人
    function addPatient(bytes32 name, uint weight, uint height, uint NHSNum) {
        patients.push(Patient({
            name: name,
            weight: weight,
            height: height,
            NHSNum: NHSNum, 
            specialty: '',  
            consultant: '',
            diagnoses: '',
            Creatinite: 0,
            Sodium: 0,
            Potassium: 0,
            eGFR: 0,
            Urea: 0
        }));
    }
    

    
    //更新肌酸酐
    function updateCreatinite(bytes32 name, uint num) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               patients[p].Creatinite = num;
            }
        }
    }
    //讀取
    function getCreatinite(bytes32 name) returns(uint Creatinite) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               return patients[p].Creatinite;
            }
        }
    }


    //更新鈉指數
    function updateSodium(bytes32 name, uint num) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               patients[p].Sodium = num;
            }
        }
    }
    //讀取
    function getSodium(bytes32 name) returns(uint Sodium) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               return patients[p].Sodium;
            }
        }
    }
    
    //更新鉀指數
    function updatePotassium(bytes32 name, uint num) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               patients[p].Potassium = num;
            }
        }
    }
    //讀取
    function getPotassium(bytes32 name) returns(uint Potassium) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               return patients[p].Potassium;
            }
        }
    }
    
    //更新腎功能
    function updateeGFR(bytes32 name, uint num) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               patients[p].eGFR = num;
            }
        }
    }
    //讀取
    function geteGFR(bytes32 name) returns(uint eGFR) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               return patients[p].eGFR;
            }
        }
    }


   //更新尿素
    function updateeUrea(bytes32 name, uint num) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               patients[p].Urea = num;
            }
        }
    }
    //讀取
    function getUrea(bytes32 name) returns(uint Urea) {
        for (uint p = 0; p < patients.length; p++) {
            if (patients[p].name == name) {
               return patients[p].Urea;
            }
        }
    }
    
    function get() {
        allPatients(); 
    }
    
    //獲得所有病人
    function allPatients() internal constant returns(Patient[]) {
        return patients;
    }
}
 */