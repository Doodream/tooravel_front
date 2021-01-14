import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    box: {
        minHeight: '20px',
        padding: '19px',
        marginTop: '20px',
        marginBottom: '5px',
        backgroundColor: '#f5f5f5',
        border: '1px solid #e3e3e3',
        borderRadius: '4px',
        boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.05)',
                overflow: 'auto',
        height: '400px',
    },
    firstSubtitle: {
        margin: '5px',
        marginTop: '0px',
    },
    subtitle: {
        margin: '5px',
        marginTop: '10px',
    },
    subtext: {
        marginLeft: '8px'
    }
}));

const RentTerms = ()=>{
    const classes = useStyles()
        return (
    <Box className={classes.box}>
        <Typography variant="subtitle1" className={classes.firstSubtitle}>1조 (목적)</Typography>
        <Typography variant="body2">이 약관은 투레벨(Tooravel)(이하 “회사”)과 임차인 사이의 대여제품 임대차계약 (이하 “대여계약”)상의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>2조 (용어의 정의)</Typography>
        <Typography variant="body2">1) “대여”란 회사가 임차인에게 회사가 규정하는 금액을 받고 약정된 계약기간 동안 회사의 대여제품을 임차인에게 임대하는 것을 말하고 “대여계약”은 그와 관련된 일체의 계약 행위를 말합니다.</Typography>
        <Typography variant="body2">2) “대여제품”이란 회사가 대여를 목적으로 임차인에게 제공하는 모든 제품을 말합니다.</Typography>
        <Typography variant="body2">3) “대여기간”이란 회사와 임차인이 상호 약정한 사용기간을 말합니다.</Typography>
        <Typography variant="body2">4) “대여일자” 및 “반납일자”는 회사가 임차인에게 대여제품을 인도하는 날과 임차인이 대여제품을 회사로 반납하는 날로 각 날의 시간을 포함합니다.</Typography>
        <Typography variant="body2">5) “대여장소” 및 “반납장소”는 회사가 임차인에게 대여제품의 인도하는 장소와 임차인이 대여제품을 회사에 반납하는 장소입니다.</Typography>
        <Typography variant="body2">6) “대여금액”이란 회사의 제품을 임차인이 대여하는 과정에서 회사가 규정하는 금액을 임차인이 지불해야 하는 일정금액을 말합니다.</Typography>
        <Typography variant="body2">7) “지연손해금”은 반납일자를 넘어서 대여제품의 반납이 이루어질 경우 임차인이 회사 측에 지불해야 하는 일정금액을 말합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>3조 (예약의 체결)</Typography>
        <Typography variant="body2">1) 임차인은 대여제품을 임차하기 전 대여제품, 대여금액, 대여기간, 대여일자, 반납일자, 대여장소, 반납장소, 지연손해금, 기타 임차조건 등을 확인하여 예약을 할 수 있습니다.</Typography>
        <Typography variant="body2">2) 임차인이 대여계약을 변경하고자 할 때에는 사전에 회사와 합의하여야 하며, 회사와 합의가 없는 경우에는 회사의 이용약관에 따릅니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>4조 (예약의 취소와 변경)</Typography>
        <Typography variant="body2">1) 임차인이 계약상 대여일자를 경과하여 대여제품을 인수하였을 경우라도 미사용 기간에 대한 환불은 하지 않으며, 대여계약을 취소하지 않을 경우 전체 대여기간에 대한 미사용 기간에 대하여도 환불하지 아니합니다.</Typography>
        <Typography variant="body2">2) 임차인이 대여일자 7일(168시간) 이전에 예약을 취소하는 경우, 위약금이 없으며 전액 환불됩니다.</Typography>
        <Typography variant="body2">3) 임차인이 대여일자 2일(48시간) 이전에 예약을 취소하는 경우, 대여금액의 20%에 해당하는 위약금이 발생합니다.</Typography>
        <Typography variant="body2">4) 임차인이 대여일자 1일(24시간) 이전에 예약을 취소하는 경우, 대여금액의 30%에 해당하는 위약금이 발생합니다.</Typography>
        <Typography variant="body2">5) 임차인이 대여시간 10분 이전에 예약을 취소하는 경우, 대여금액의 50%에 해당하는 위약금이 발생합니다.</Typography>
        <Typography variant="body2">6) 임차인이 대여일자 및 시간이 지나고 취소하는 경우 대여금액은 환불되지 않습니다.</Typography>
        <Typography variant="body2">7) 본 조의 각 항에 따른 예약 취소 위약금과 별개로, 임차인의 예약으로 회사의 배송이 시작되었다면, 배송비는 환불이 불가능합니다.</Typography>
        <Typography variant="body2">8) 제 3조에 따라 예약을 한 후 천재지변 등 불가항력적인 사유로 인하여 계약을 체결할 수 없게 된 경우에는 회사는 대여금액을 100% 임차인에게 환불합니다.</Typography>
        <Typography variant="body2">9) 대여제품의 수량, 대여, 반납 기간과 장소의 변경 등 임차인이 예약한 사항을 임차인의 의사에 따라 변경할 경우, 임차인은 회사와 합의하여야 하며, 그렇지 아니한 경우에는 예약을 취소하고 다시 예약함을 원칙으로 합니다. 이 경우 임차인에게 본 조와 투레벨 이용약관의 예약의 변경에 관한 규정에 따른 위약금이 청구됩니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>5조 (대여계약의 체결)</Typography>
        <Typography variant="body2">1) 대여계약의 체결은 임대차계약서에 의하며, 임대차계약서에는 제3조 제1항에서 열거한 사항을 명시하여야 합니다. 그러나 온라인 또는 전화상으로 대여계약을 체결하는 경우에는, 회사와 임차인 사이에 임대차계약서가 작성되지 않더라도 온라인 또는 전화상으로 입력되거나 진술된 내용에 따라 대여계약이 체결된 것으로 봅니다.</Typography>
        <Typography variant="body2">2) 회사는 대여계약 체결 시 이용약관의 주요 내용을 설명하여야 하며, 대여계약을 위해 임차인의 정보를 수집, 이용, 제공한다는 사실을 고지하고 동의를 받아야 합니다. 다만, 온라인 혹은 전화상으로 계약을 체결할 경우, 임차인은 진술된 내용에 동의한 것으로 하며 회사는 이에 관한 고지의 의무를 다한 것으로 합니다.</Typography>
        <Typography variant="body2">3) 회사는 임차인이 다음 각 호의 어느 하나에 해당할 경우 대여계약의 체결을 거절할 수 있으며, 이 경우 지급받은 대여금액을 반환합니다.</Typography>
        <Typography variant="body2" className={classes.subtext}>1. 신원확인이 불가능하거나 회사의 질문 및 자료요구에 불응할 때</Typography>
        <Typography variant="body2" className={classes.subtext}>2. 예약 당시 결정한 사용자와 대여제품 인수시의 사용자가 다를 때</Typography>
        <Typography variant="body2" className={classes.subtext}>3. 과거 대여와 관련하여 대여금액의 체납이 있을 때</Typography>
        <Typography variant="body2" className={classes.subtext}>4. 과거대여와 관련하여 제 15조 각 호에 해당하는 행위가 있었을 때</Typography>
        <Typography variant="body2" className={classes.subtext}>5. 위 각 호에 준하는 사항으로서 대여계약의 체결을 거절할 만한 객관적인 사유가 있을 때</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>6조 (대여제품의 대체)</Typography>
        <Typography variant="body2">1) 회사는 임차인이 예약한 대여제품을 대여할 수 없을 경우에는 유사한 다른 모델의 제품으로 대체를 요청할 수 있습니다.</Typography>
        <Typography variant="body2">2) 제 1항에 의한 대체제품의 대여금액이 대여제품의 대여금액보다 비싼 경우에는 기존 대여제품의 대여금액을, 대여제품의 대여금액보다 싼 경우에는 대체물품의 대여금액을 각 적용합니다.</Typography>
        <Typography variant="body2">3) 임차인은 제 1항에 대한 대체물품의 임차를 거절할 수 있으며, 이 경우 회사는 임차인에게 대여금액 전액을 반환합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>7조 (요금의 수령방법 등)</Typography>
        <Typography variant="body2">1) 대여제품 대여 예약 시 고객이 선택한 결제 방식을 통해 대여금액이 결제됩니다.</Typography>
        <Typography variant="body2">2) 임차인의 요구로 인하여 대여금액 외의 추가비용이 발생한 경우에는 임차인은 그 추가비용을 부담하여야 합니다.</Typography>
        <Typography variant="body2">3) 임차인은 대여기간을 초과하여 대여제품을 사용한 경우에는 초과 사용 시간에 대한 대여금액을 새로운 대여로 산정하여 그 기 기만만큼의 대여금액을 지급하여야합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>8조 (회사의 대여계약 해지)</Typography>
        <Typography variant="body2">1) 회사는 다음 각 호의 어느 하나에 해당하는 경우에는 계약을 해지할 수 있습니다.</Typography>
        <Typography variant="body2">2) 임차인이 계약의 중요한 사항을 위반하여 계약을 유지하기 어려운 객관적인 사정이 존재할 때</Typography>
        <Typography variant="body2">3) 계약 당시 임차인의 개인정보가 허위로 판명된 때</Typography>
        <Typography variant="body2">4) 임차인이 사고를 야기한 때</Typography>
        <Typography variant="body2">5) 제 15조의 금지행위를 한 때</Typography>
        <Typography variant="body2">6) 제 1항에 따라 계약이 해지된 경우 회사는 대여금액을 반환하지 않습니다.</Typography>
        <Typography variant="body2">7) 제 1항 각호의 사유가 적발될 경우, 임차인은 잔여기간 유무와 관계없이 즉시 대여제품을 반환하여야 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>9조 (임차인의 대여계약 해지)</Typography>
        <Typography variant="body2">1) 임차인은 대여제품 인도이전의 하자로 인하여 대여제품을 사용할 수 없는 때에는 제 19조 제 6항에 의한 조치를 받거나 대여계약을 해지할 수 있습니다.</Typography>
        <Typography variant="body2">2) 제 1항에 따라 대여계약이 해지된 경우에는 회사는 수령한 대여금액 전액을 임차인에게 반환합니다.</Typography>
        <Typography variant="body2">3) 임차인의 사정에 의하여 대여계약을 해지하는 경우에는 제 4조 및 임차인이용약관 상의 예약의 취소와 변경에 관한 규정에 따릅니다. 다만, 1개월 이상 장기계약의 경우 회사와 임차인과 회사는 중도해지시의 수수료를 별도로 약정할 수 있습니다.</Typography>
        <Typography variant="body2">4) 임차인의 귀책사유로 대여제품의 사고 또는 고장이 발생한 경우 임차인은 회사에 그 손해를 배상하고 계약을 해지할 수 있습니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>10조 (불가항력 사유로 인한 대여계약 해지)</Typography>
        <Typography variant="body2">1) 임차기간 중 천재지변, 전쟁, 내란, 사변, 폭동, 소요 등 기타 불가항력 사유로 인하여 임차인이 대여제품을 사용할 수 없는 경우에는 대여계약은 종료되며, 임차인은 이와 같은 사실을 회사에 통보하여야 합니다.</Typography>
        <Typography variant="body2">2) 제 1항에 의하여 대여계약이 종료된 경우 회사는 수령한 대여금액에서 대여계약이 종료된 때까지의 대여금액을 공제한 나머지 금액을 임차인에게 반환합니다.</Typography>
        <Typography variant="body2">3) 임차인이 제 1항의 사유로 인하여 대여제품을 반환할 수 없는 때에는 회사는 임차인에게 이로 인하여 발생한 손해의 배상을 청구할 수 없습니다. 다만, 임차인은 제 1항의 사유가 발생한 경우 즉시 회사에 연락하고, 회사의 요청에 협조해야 합니다.</Typography>
        <Typography variant="body2">4) 제 1항의 사유로 인하여 회사가 대여제품을 대여할 수 없거나 대체제품을 제공할 수 없을 때에는 회사는 임차인에 이로 인하여 발생한 손해의 배상을 청구할 수 없습니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>11조 (임차조건의 변경)</Typography>
        <Typography variant="body2">1) 임차인이 대여계약의 체결 후 임차조건을 변경하고자 하는 경우에는 미리 회사의 승낙을 받아야 합니다.</Typography>
        <Typography variant="body2">2) 임차인이 임차기간을 연장하고자 하는 경우에는 다음 이용자가 없을 시에만 가능하며, 변경 후의 대여기간에 해당하는 대여금액을 지불해야 하며 이 때 금액은 전체 금액의 할인율을 있을 때 그 룰을 따릅니다.</Typography>
        <Typography variant="body2">3) 회사는 변경된 임차조건에 따라 업무를 수행하기 어려운 경우에는 변경을 승낙하지 않을 수 있습니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>12조 (대여제품 점검 등)</Typography>
        <Typography variant="body2">1) 회사는 임차인과 함께 일상점검과 대여제품외관, 구성품 등을 확인한 후 대여제품을 인도합니다. 단, 회사와 임차인의 직접만남을 통한 대여제품 인도 및 반납이 아닌 경우에는 임차인이 확인하여, 특별한 내용이 있을 시 회사에 통보합니다.</Typography>
        <Typography variant="body2">2) 회사는 제 1항에 따른 점검, 확인 시 대여제품의 정비불량 등을 발견한 경우에는 수리 또는 부품교환 등의 조치를 취하고 그 내용을 기록, 유지하여야 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>13조 (임차인의 점검의무)</Typography>
        <Typography variant="body2">1) 임차인은 임차기간 중 대여제품을 사용하기 전에 대여제품의 외관상태 및 작동상태 등을 점검하여야 합니다.</Typography>
        <Typography variant="body2">2) 임차인은 제 1항의 점검결과 이상이 발견된 경우에는 즉시 회사에 이를 통보하여야 합니다.</Typography>
        <Typography variant="body2">3) 임차인은 회사의 대여제품 정기점검 요청 시 적극 협조해야 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>14조 (임차인의 관리 책임)</Typography>
        <Typography variant="body2">1) 임차인은 대여제품을 인도받은 시점부터 회사에 반환하는 시점까지 선량한 관리자의 주의의무를 다하여 대여제품을 사용하고 보관해야 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>15조 (금지행위)</Typography>
        <Typography variant="body2">1) 임차인은 대여기간 중에 다음 각 호의 어느 하나에 해당하는 행위를 하여서는 안됩니다.</Typography>
        <Typography variant="body2" className={classes.subtext}>1. 대여제품의 매각, 전대 또는 담보제공 등 회사의 소유권을 침해하는 일체의 행위</Typography>
        <Typography variant="body2" className={classes.subtext}>2. 대여제품의 식별표식을 위조 또는 변조하거나 대여제품을 개조하는 등 그 원상을 변경하는 행위</Typography>
        <Typography variant="body2" className={classes.subtext}>3. 법령 또는 공서양속에 위반하여 사용하는 행위</Typography>
        <Typography variant="body2" className={classes.subtext}>4. 위 각 호에 준하는 행위로 객관적으로 보아 그로 인하여 대여제품을 손상시킬 우려가 있는 행위</Typography>
        <Typography variant="body2"></Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>16조 (배상책임)</Typography>
        <Typography variant="body2">1) 임차인은 대여기간 중 제 15조에 해당하는 행위 기타 임차인의 책임 있는 사유로 인하여 회사 또는 제 3자에게 손해를 끼쳤을 경우 그 손해를 배상할 책임을 집니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>17조 (페널티금액) (예: 대여제품 분실 등)</Typography>
        <Typography variant="body2">1) 임차인이 대여기간 중 대여제품 구성품 중 일부를 분실, 파손했을 경우에는 수리, 구입 등 해당 대여제품을 원상으로 복구하는 과정에 소요되는 비용을 임차인이 부담하여야 합니다.</Typography>
        <Typography variant="body2">2) 회사는 제 1항에 의하여 임차인이 부담할 비용을 정하는 경우 수리 견적서, 구매 견적서 등의 객관적인 산정자료를 제시하여야 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>18조 (수리기간에 대한 고객 책임 부담)</Typography>
        <Typography variant="body2">1) 임차인은 임차인의 귀책사유에 의한 사고로 대여제품을 수리할 경우에는 대여제품 수리비용과 별도로 그 수리기간의 영업손해를 배상하여야 하고, 대여제품이 수리 불가능할 정도로 파손되거나 도난 된 경우의 휴업손해 기간은 재구매 및 등록에 소요되는 기간으로 합니다.</Typography>
        <Typography variant="body2">2) 회사는 제 1항에 의하여 임차인이 부담할 손해액을 정하는 경우 동종대여제품의 대여금액 등을 감안한 객관적인 산정자료를 제시하여야 합니다.</Typography>
        <Typography variant="body2">3) 회사가 제 2항에 의한 객관적인 산정자료를 제시하지 않는 경우 임차인은 수리기간 또는 재구매 및 등록에 소요되는 기간에 해당하는 기준대여금액의 50%를 부담하여야 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>19조 (임차인의 대여제품 이상 또는 고장 발견 시 조치)</Typography>
        <Typography variant="body2">1) 임차인은 임차 중 대여제품의 이상 또는 고장을 발견한 때에는 회사에 연락하고 그 처리방향에 대하여 협의하여야 합니다.</Typography>
        <Typography variant="body2">2) 임차인의 고의, 과실로 대여제품의 이상이나 고장이 발생한 경우에는 대여제품의 인수 및 수리에 소요되는 비용을 임차인이 부담하여야 합니다.</Typography>
        <Typography variant="body2">3) 회사는 제 2항에 의해 대여제품을 수리하는 경우 사전에 예상비용을 임차인에게 통지하고, 수리 후에는 소요된 비용을 임차인에게 청구합니다.</Typography>
        <Typography variant="body2">4) 임차인이 회사와 협의되지 아니한 곳으로 대여제품을 이동, 수리 등을 행하여 회사 영업에 지장이 초래되어 재수리 등으로 발생하는 추가비용은 임차인이 부담하여야 합니다.</Typography>
        <Typography variant="body2">5) 회사와 임차인은 사고해결을 위해 노력하여야 하며, 협조를 태만히 하여 상대방에게 손해를 입힌 경우에는 귀책사유에 따라 그 손해를 배상할 책임을 집니다.</Typography>
        <Typography variant="body2">6) 대여제품 인도 이전의 하자로 인하여 대여제품을 사용 불능하게 되거나 수리가 필요하게 되었을 때 임차인은 회사로부터 대체 대여제품의 제공 또는 이에 준하는 조치를 받을 수 있습니다.</Typography>
        <Typography variant="body2">7) 회사는 제 6항에서 정한 조치를 할 수 없는 경우에는 임차인에게 대여금액을 반환하고, 대여제품 회수 등에 필요한 비용을 부담합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>20조 (대여제품의 반환시기 등)</Typography>
        <Typography variant="body2">1) 임차인은 약정한 대여기간 종료시점 또는 대여계약 중도해지 시에 대여제품을 회사에 반환하여야 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>21조 (대여제품의 확인 등)</Typography>
        <Typography variant="body2">1) 임차인은 대여제품을 회사에 반환할 때 통상적 사용으로 인한 마모를 제외하고는 인수 시 확인한 상태 그대로 반환하여야 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>22조 (대여제품의 반환장소 등)</Typography>
        <Typography variant="body2">1) 임차인은 약정한 반환장소에서 대여제품을 반환하여야 합니다. 다만, 제 11조 제 1항에 의하여 반환장소가 변경된 경우에는 변경 후의 반환장소에서 반환하여야 합니다.</Typography>
        <Typography variant="body2">2) 임차인의 사정에 의하여 반환장소가 변경되어 대여제품 회수에 추가비용이 발생한 경우에는 임차인은 대여제품 회수 비용을 부담하여야 합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>23조 (대여제품 미 반환에 대한 조치)</Typography>
        <Typography variant="body2">1) 회사는 임차인이 대여기간 종료 시로부터 24시간을 경과하여도 반환장소에 대여제품을 반환하지 아니하거나 회사의 반환 청구에 응하지 않을 때에는 대여제품 회수 및 손해보전에 필요한 모든 법적 조치를 취할 수 있습니다.</Typography>
        <Typography variant="body2">2) 회사는 제 1항에 해당되는 경우 대여제품의 소재를 확인하기 위하여 임차인에게 전화를 하거나 주소지를 방문하여 함께 거주하는 가족 및 친족 등에게 청취조사를 하는 등 필요한 조치를 취할 수 있습니다.</Typography>
        <Typography variant="body2">3) 회사는 제 2항의 조치에도 불구하고 대여기간 종료 시로부터 48시간이 경과하였음에도 대여제품과 임차인의 소재가 불명한 때에는 도난신고 등 필요한 조치를 취할 수 있습니다. 이 경우 회사는 제 2항에 따른 조치를 취하였음에도 대여제품과 임차인의 소재가 불명함을 입증하여야 합니다.</Typography>
        <Typography variant="body2">4) 임차인은 제 1 항 내지 제 3항에 해당하는 경우 회사에 입힌 손해를 배상할 책임을 지며, 대여제품 회수 및 임차인, 운전자의 소재확인 등에 소요된 비용을 부담하여야 합니다.</Typography>
        <Typography variant="body2">5) 회사는 다음 각 호의 어느 하나에 해당하는 임차인의 계약위반으로 인한 동종 또는 유사한 피해를 방지하기 위하여 계약 시 수집, 이용목적, 수집항목, 보유 및 이용기간 등이 기재된 별도의 “개인정보 이용동의서” 및 개인 정보를 제공받는 자, 목적, 항목, 보유 및 이용기간 등이 기재된 별도의 “제 3자 제공동의서”에 동의를 받아 피해가 발생한 경우에 한하여 동종사업자 및 사업자단체에게 개인정보를 제공할 수 있습니다.</Typography>
        <Typography variant="body2" className={classes.subtext}>1. 임차인이 회사의 대여제품 반환요구에도 불구하고 정당한 사유 없이 대여제품을 반환하지 않거나 연락이 되지 않는 상태에서 대여제품 반환일로부터 익일 영업시간 내에 반환하지 아니한 경우</Typography>
        <Typography variant="body2" className={classes.subtext}>2. 임차인이 대여금액을 연체하여 회사가 상당기간 동안 2회 이상 납부를 최고하였음에도 계속 연체하고 있는 경우. 단, 임차인에게 부득이한 사유가 있는 경우에는 제외합니다.</Typography>
        <Typography variant="body2" className={classes.subtext}>3. 대여제품을 불법 매매 또는 개조한 경우.</Typography>
        <Typography variant="body2" className={classes.subtext}>4. 대여제품 식별표식 위조 또는 범죄에 사용하는 등 불법행위에 이용한 경우</Typography>
        <Typography variant="body2" className={classes.subtext}>5. 대여제품을 전대, 담보제공 또는 매각하는 등 회사의 소유권을 침해하는 일체의 행위를 한 경우</Typography>
        <Typography variant="body2" className={classes.subtext}>6. 사고 후 도주 또는 대여제품을 방치한 경우</Typography>
        <Typography variant="body2" className={classes.subtext}>7. 위 각 호에 준하는 행위로 회사에 중대한 손해를 발생시키는 경우</Typography>
        <Typography variant="body2" className={classes.subtext}>6) 회사는 제 5항에 따라 제공받은 임차인의 정보를 임차인으로부터 동의 받은 목적과 다른 목적으로 이용할 수 없습니다.</Typography>
        <Typography variant="body2" className={classes.subtext}>7) 회사가 제 1항 내지 제 6항에 의한 업무를 처리하는 과정에서 고의 또는 과실로 임차인에게 손해를 입힌 경우에는 배상책임을 부담합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>24조 (지연손해금)</Typography>
        <Typography variant="body2">1) 회사와 임차인은 이 약관에 따른 금전채무의 이행을 지체한 경우 상사법정이율에 따른 지연손해금을 지급하여야합니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>25조 (적용범위)</Typography>
        <Typography variant="body2">1) 이 약관은 회사와 임차인 사이의 대여계약과 관련한 일반적인 사항을 규정한 것입니다. 이 약관 이외에 회사와 임차인 사이에 별도로 합의한 개별약관이 있는 경우, 해당 개별약관이 이 약관에 우선하여 적용됩니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>26조 (계약의 세칙)</Typography>
        <Typography variant="body2">1) 회사는 이 약관이 정한 범위 내에서 임차인의 이해가 용이하도록 세부사항을 규정하는 세칙을 정할 수 있습니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>27조 (신용조회)</Typography>
        <Typography variant="body2">1) 회사는 임차인의 동의를 받아 대여계약 체결 전 신용정보기관을 통하여 임차인의 신용상태를 조회, 확인 할 수 있습니다.</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>28조 (관할법원)</Typography>
        <Typography variant="body2">1) 이 약관의 해석과 이에 근거한 대여계약에 관련된 법적 분쟁에 대하여는 안양지방법원을 전속적 관할법원으로 합니다. 단, 회사와 임차인이 관할법원에 대해 약정할 경우에는 그에 따릅니다.</Typography>
    </Box>
)}
export {RentTerms};