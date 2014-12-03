<?


$timeTable[7] = array(
	"M"=>0,
	"T"=>0,
	"W"=>0,
	"Th"=>0,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[8] = array(
	"M"=>0,
	"T"=>0,
	"W"=>0,
	"Th"=>0,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[9] = array(
	"M"=>1,
	"T"=>0,
	"W"=>1,
	"Th"=>0,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[10] = array(
	"M"=>1,
	"T"=>0,
	"W"=>1,
	"Th"=>0,
	"F"=>1,
	"S"=>2,
	"Su"=>0	
);

$timeTable[11] = array(
	"M"=>1,
	"T"=>0,
	"W"=>1,
	"Th"=>0,
	"F"=>1,
	"S"=>2,
	"Su"=>0	
);

$timeTable[12] = array(
	"M"=>0,
	"T"=>0,
	"W"=>0,
	"Th"=>0,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[13] = array(
	"M"=>0,
	"T"=>1,
	"W"=>0,
	"Th"=>1,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[14] = array(
	"M"=>1,
	"T"=>1,
	"W"=>1,
	"Th"=>1,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[15] = array(
	"M"=>1,
	"T"=>1,
	"W"=>1,
	"Th"=>1,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[16] = array(
	"M"=>1,
	"T"=>1,
	"W"=>1,
	"Th"=>1,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[17] = array(
	"M"=>1,
	"T"=>1,
	"W"=>1,
	"Th"=>1,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[18] = array(
	"M"=>0,
	"T"=>1,
	"W"=>0,
	"Th"=>1,
	"F"=>0,
	"S"=>2,
	"Su"=>0	
);

$timeTable[19] = array(
	"M"=>0,
	"T"=>0,
	"W"=>0,
	"Th"=>0,
	"F"=>0,
	"S"=>0,
	"Su"=>0	
);

$timeTable[20] = array(
	"M"=>0,
	"T"=>0,
	"W"=>0,
	"Th"=>0,
	"F"=>0,
	"S"=>0,
	"Su"=>0	
);

$json = json_encode( $timeTable );

$fh = fopen("hours.json", "w");

fwrite($fh, $json);

fclose( $fh );










