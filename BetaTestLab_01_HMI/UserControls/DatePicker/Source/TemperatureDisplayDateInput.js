console.log("TemperatureDisplayInput.js");

//function waitForElements() {
//    console.log("Element aranıyor...");

//    if ($('#StartDateInput').length > 0 && $('#EndDateInput').length > 0) {
//        console.log("Elementler bulundu!");

//        $('#EndDateInput').on('change', function () {
//            var value = $(this).val();
//            console.log("EndDate datası değişti: " + value);
//            try {
//                // PLC değişkenine doğrudan yaz
//                TcHmi.Symbol.writeEx('%s%PLC1.TemperatureDisplay.sEndDate%/s%', value, function (data) {
//                    if (data.error === TcHmi.Errors.NONE) {
//                        console.log("StartDate PLC'ye başarıyla yazıldı");
//                    } else {
//                        console.error("StartDate PLC yazma hatası:", data.error);
//                    }
//                });
//            } catch (error) {
//                console.error("StartDate PLC yazma exception:", error);
//            }
//        });

//        $('#StartDateInput').on('change', function () {
//            var value = $(this).val();
//            console.log("StartDate datası değişti: " + value);
//            try {
//                // PLC değişkenine doğrudan yaz
                
//                TcHmi.Symbol.writeEx('%s%PLC1.TemperatureDisplay.sStartDate%/s%', value, function (data) {
//                    console.log(value);
//                    if (data.error === TcHmi.Errors.NONE) {
//                        console.log("StartDate PLC'ye başarıyla yazıldı");
//                    } else {
//                        console.error("StartDate PLC yazma hatası:", data.error);
//                    }
//                });
//            } catch (error) {
//                console.error("StartDate PLC yazma exception:", error);
//            }
//        });

//    } else {
//        console.log("Elementler henüz hazır değil, tekrar deneniyor...");
//        setTimeout(waitForElements, 500);
//    }
//}

//$(document).ready(function () {
//    waitForElements();
//});
