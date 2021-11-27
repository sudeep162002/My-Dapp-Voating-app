// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Voating {
 
  uint applicant_1=0;
  uint applicant_2=0;

  function vote_applicant_1() public {
    applicant_1=applicant_1+1;
  }
  
  
   function vote_applicant_2() public {
    applicant_2=applicant_2+1;
  }

  function get_applicant_1_data() public view returns (uint) {
    return applicant_1;
  }
  
  function get_applicant_2_data() public view returns (uint) {
    return applicant_2;
  }
  
  function change_vote_1(uint value) public {
    applicant_1=value;
  }
  
  
   function change_vote_2(uint value) public {
    applicant_2=value;
  }
  
  
  
}