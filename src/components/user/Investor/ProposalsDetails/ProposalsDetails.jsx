import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Logo from '../../../../assets/Proposals_Logo.png'
import { useNavigate } from 'react-router-dom';
import './ProposalsDetails.css'

const ProposalsDetails = () => {
    const { id } = useParams();

    const navigate = useNavigate();


    // Mock proposals data
    const proposalsData = {
        1: {
            title: 'EcoPackage',
            offer: '10% Equity',
            seekingBudget: '$500,000',
            field: 'Sustainable Packaging',
            team: [
                { name: 'Sarah Chen', role: 'CEO, Materials Scientist' },
                { name: 'Alex Rodriguez', role: 'CTO, Packaging Engineer' },
                { name: 'Jamie Lee', role: 'CMO, Sustainability Expert' }
            ],
            documents: ['Proposal ', 'Proposal '],
            imageUrl: 'https://via.placeholder.com/150',
        },
        2: {
            title: 'AI-Driven Cybersecurity',
            offer: '15% Equity',
            seekingBudget: '$1,000,000',
            field: 'Cybersecurity, AI',
            team: [
                { name: 'Michael Clark', role: 'CEO, Cybersecurity Expert' },
                { name: 'David Brown', role: 'CTO, AI Specialist' }
            ],
            documents: ['Proposal 1', 'Security Whitepaper'],
            imageUrl: 'https://via.placeholder.com/150',
        },
    };

    // Fetch proposal data by id
    const proposal = proposalsData[id];

    if (!proposal) {
        return <div>Proposal not found</div>;
    }

    const handleExit = () => {
        navigate(`/investor-dashboard/proposals`);
    };

    return (
        <div className="proposal-details p-4">
            <div className="d-flex justify-content-between align-items-center mb-5">
                <h2><strong>{proposal.title}</strong></h2>
                <Button variant="outline-danger" onClick={() => handleExit()}>X</Button>
            </div>

            <div className="row content">
                <div className="col-md-6">
                    <img src={Logo} alt="Project" className="img-fluid mb-3" width={180}/>
                    <div className="mt-4">
                        <h5><strong>Project Documents</strong></h5>
                        {proposal.documents.map((doc, index) => (
                            <Button variant="secondary" className="me-2 proposals_doc" key={index}>
                                {doc}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="col-md-6">
                    <h5 className='mb-3'><strong>Project Details</strong></h5>
                    <p><strong className='orange'>Offer:</strong> {proposal.offer}</p>
                    <p><strong className='orange'>Seeking Budget:</strong> {proposal.seekingBudget}</p>
                    <p><strong className='orange'>Field:</strong> {proposal.field}</p>
                    
                    <div className='mt-5'>
                    <h5><strong>Team</strong></h5>
                    <ul>
                        {proposal.team.map((member, index) => (
                            <li key={index}>{member.name} - {member.role}</li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>



            <div className="mt-4">
                <h5 className='mb-4'><strong>Provide Feedback</strong></h5>
                <Form>
                    <Form.Group className="mb-3" style={{position: 'relative'}}>
                        <Form.Control className='textArea' as="textarea" rows={3} placeholder={`Share Your Thoughts On ${proposal.title}...`} />
                    </Form.Group>
                    <Button variant="warning" className='SendFeedBack_Btn'>Send Feedback</Button>
                </Form>
            </div>
        </div>
    );
}

export default ProposalsDetails;
